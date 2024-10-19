module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],

          alias: {
            "@": "./",
          },
        },
      ],
    ],

    presets: [["babel-preset-expo", {
      jsxImportSource: "nativewind"
    }], "nativewind/babel"]
  };
};
