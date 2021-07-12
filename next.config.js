require("dotenv").config({ path: `${process.env.ENVIRONMENT}` });

module.exports = {
  // reactStrictMode: true,
  env: {
    VIMEO_TOKEN: '901591f70973e898ae7b7b2f070b71da'
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
