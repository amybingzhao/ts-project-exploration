// npx metro build index.ts --platform web --out ./dist/index.js

module.exports = {
    resolver: {
      resolveRequest: (context, moduleName, platform) => {
          return {
            filePath: "/Users/amyzhao/ts-project-exploration/src/"+moduleName + ".ts",
            type: 'sourceFile',
          };
      }
    },
  }
  