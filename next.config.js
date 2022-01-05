/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl:
      "mongodb+srv://portrolio-user:QiwpR5rvboh0Hw7s@cluster0.qmfoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
  images: {
    domains: ["stylefitbucket.s3.ap-northeast-2.amazonaws.com"],
  },
};
