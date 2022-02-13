import { initAuth0 } from "@auth0/nextjs-auth0";

const PROD_CONFIG = {
  AUTH0_BASEURL: "https://ashpor.com",
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK: process.env.AUTH0_CALLBACK,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
};
const DEV_CONFIG = {
  AUTH0_BASEURL: "http://localhost:3000",
  AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  AUTH0_CALLBACK: process.env.NEXT_PUBLIC_AUTH0_CALLBACK,
  AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
  AUTH0_SECRET: process.env.NEXT_PUBLIC_AUTH0_SECRET,
  AUTH0_AUDIENCE: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
};

const CONFIG =
  process.env.NODE_ENV === "development" ? DEV_CONFIG : PROD_CONFIG;

const auth0 = initAuth0({
  baseURL: CONFIG.AUTH0_BASEURL,
  issuerBaseURL: CONFIG.AUTH0_DOMAIN,
  clientID: CONFIG.AUTH0_CLIENT_ID,
  clientSecret: CONFIG.AUTH0_CLIENT_SECRET,
  secret: CONFIG.AUTH0_SECRET,
  clockTolerance: 60,
  httpTimeout: 5000,
  authorizationParams: {
    scope: "read:current_user update:current_user_metadata openid profile",
    audience: CONFIG.AUTH0_AUDIENCE,
  },
  routes: {
    callback: CONFIG.AUTH0_CALLBACK,
    postLogoutRedirect: CONFIG.AUTH0_POST_LOGOUT_REDIRECT_URI,
  },
  session: {
    rollingDuration: 60 * 60 * 24,
    absoluteDuration: 60 * 60 * 24 * 7,
  },
});

export default auth0;

export const isAuthorized = (user, role) => {
  return user && user[CONFIG.AUTH0_NAMESPACE + "/roles"].includes(role);
};

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/v1/login",
    });
    res.end();
    return null;
  }

  return session.user;
};

export const withToken = async (req, res) => {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/v1/login",
    });
    res.end();
    return null;
  }

  return session.accessToken;
};

export const withAuth =
  (getData) =>
  (role) =>
  async ({ req, res }) => {
    const session = await auth0.getSession(req);
    if (
      !session ||
      !session.user ||
      (role && !isAuthorized(session.user, role))
    ) {
      res.writeHead(302, {
        Location: "/api/v1/login",
      });
      res.end();
      return { props: {} };
    }

    const data = getData ? await getData({ req, res }, session.user) : {};
    return { props: { user: session.user, ...data } };
  };
