import { s as supabase } from './_slug__BMJmqAtU.mjs';

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/dashboard");
};

export { GET };
