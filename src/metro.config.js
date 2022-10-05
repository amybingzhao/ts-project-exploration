module.exports = {
    // projectRoot: ".",
    resolver: {
      // nodeModulesPaths: ["."],
      resolveRequest: (context, moduleName, platform) => {
        // if (moduleName.contains("/")) {
        //   // Resolve file path logic...
        //   // NOTE: Throw an error if there is no resolution.
          return {
            filePath: "/Users/amyzhao/ts-project-exploration/src/"+moduleName + ".ts",
            type: 'sourceFile',
          };
        // }
        // // Optionally, chain to the standard Metro resolver.
        // return context.resolveRequest(context, moduleName, platform);
      }
    },
    server: {
      port: 3000,
    },
    // transformer: {
    //   minifierPath: 'metro-minify-terser',
    // },
  }
  