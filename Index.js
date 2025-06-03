export default {
  async fetch(request, env, ctx) {
    const userAgent = request.headers.get("user-agent") || "";
    console.log("Received User-Agent:", userAgent);

    const allowed = ["ott player", "ott tv", "ott navigator"];

    const isAllowed = allowed.some(agent =>
      userAgent.toLowerCase().includes(agent)
    );

    if (isAllowed) {
      const redirectUrl = "https://www.dropbox.com/scl/fi/urt77pk1nq7wvxwpggymn/Castpro-Premium.zip?rlkey=tbrdaa9yr8wve9sfi70tesz8z&st=7jfea1mo&dl=1";
      return Response.redirect(redirectUrl, 302);
    } else {
      return new Response("Mak kau oren", { status: 403 });
    }
  }
}
