import type { Context } from "@netlify/edge-functions";

/**
 * Basic auth for client previews. Active only when PREVIEW_USER and PREVIEW_PASS
 * are set in the Netlify environment. Delete those two variables to take the site public.
 */
export default async (req: Request, context: Context) => {
  const user = Netlify.env.get("PREVIEW_USER");
  const pass = Netlify.env.get("PREVIEW_PASS");
  if (!user || !pass) return context.next();

  const [scheme, encoded] = (req.headers.get("authorization") ?? "").split(" ");
  if (scheme === "Basic" && encoded) {
    const decoded = atob(encoded);
    const i = decoded.indexOf(":");
    if (decoded.slice(0, i) === user && decoded.slice(i + 1) === pass) {
      return context.next();
    }
  }
  return new Response("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Preview", charset="UTF-8"' },
  });
};

export const config = { path: "/*" };
