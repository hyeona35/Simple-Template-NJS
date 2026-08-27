import { env } from "@/env.mjs";

export const siteConfig = {
  title: "Templete",
  description: "For Simple Site",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Next-auth"],
  url: env.APP_URL,
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || "",
};
