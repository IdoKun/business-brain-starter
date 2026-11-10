// Plan B lock (no Cloudflare Zero Trust needed): a simple password in front of the whole hub.
// Off until you add a secret called HUB_PASSWORD in Cloudflare (Pages project → Settings → Variables and secrets).
// The browser asks once for a user name (anything) and the password, then remembers it.
export async function onRequest({ request, env, next }) {
  const pw = env.HUB_PASSWORD;
  if (!pw) return next();                       // no password set → open (use the email lock instead)
  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Basic ')) {
    let given = '';
    try { given = atob(auth.slice(6)).split(':').slice(1).join(':'); } catch (e) {}
    const a = new TextEncoder().encode(given), b = new TextEncoder().encode(pw);
    const same = a.length === b.length && (crypto.subtle.timingSafeEqual ? crypto.subtle.timingSafeEqual(a, b) : given === pw);
    if (same) {
      const res = await next();
      const out = new Response(res.body, res);
      out.headers.set('Cache-Control', 'private, no-store');
      return out;
    }
  }
  return new Response('Password needed', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="My business brain"', 'Cache-Control': 'no-store' } });
}
