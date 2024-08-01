import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        ACS_URL: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        PARTNER_ID: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        PROJECT_TYPE: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        PARTNER_NAME: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
        GTM_ID: envField.string({
          context: "client",
          access: "public",
          optional: false,
        }),
      },
    },
  },
  integrations: [mdx()],
});
