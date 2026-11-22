module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("CDN_URL"),
        s3Options: {
          credentials: {
            accessKeyId: env("R2_ACCESS_KEY_ID"),
            secretAccessKey: env("R2_SECRET_ACCESS_KEY"),
          },
          region: "auto",
          endpoint: `https://${env("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
          params: {
            ACL: "public-read",
            Bucket: env("R2_BUCKET_NAME"),
          },
        },
      },
    },
  },
});
