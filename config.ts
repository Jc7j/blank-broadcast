import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "ShipFast",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "shipfa.st",
  // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in appiClient (/libs/api.js) upon 401 errors from our API & /hooks/usePrivate.js
  callbackUrl: "/dashboard",
} as ConfigProps;

export default config;
