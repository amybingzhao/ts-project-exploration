import { build, transformSync } from "esbuild";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// let nodeModulesResolvePlugin = {
//   name: "third_party_resolver",
//   setup(build) {
//     // https://github.com/evanw/esbuild/issues/619#issuecomment-751995294
//     let filter = /^[^.\/]|^\.[^.\/]|^\.\.[^\/]/; // Must not start with "/" or "./" or "../"
//     build.onResolve({ filter }, args => {
//       console.dir(args);
//       return {
//         path: args.path,
//         external: true,
//       };
//     });

//     // build.onResolve({ filter: /import ([a-zA-Z{}* ]+) "([a-zA-Z0-9]+)"/gm }, args => {
//     //   console.dir("Import: " + args);
//     //   return {
//     //     path: path.resolve(__dirname, "asana2/third_party/web", args.path, "-17.0.2"),
//     //   };
//     // });
//   },
// };

build({
    entryPoints: ["index.ts"],
    bundle: true,
    minify: false,
    sourcemap: true,
    platform: "browser",
    target: ["esnext"],
    resolveExtensions: [".ts", ".js"],
//   outfile: "dist/out.js",
    outdir: 'dist',
    nodePaths: [path.resolve(__dirname)],
    //   plugins: [nodeModulesResolvePlugin],
    loader: { ".js": "ts" },
    splitting: true,
    format: 'esm',
});
