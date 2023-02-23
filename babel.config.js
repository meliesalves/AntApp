module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          alias: {
            "@src": "./src",
            "@types": "./src/@types",
          },
        },
      ],
    ],
  };
};
