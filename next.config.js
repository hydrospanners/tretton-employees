const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
  "@mui/icons-material", // If @mui/icons-material is being used
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["i.1337co.de"],
  },
});
