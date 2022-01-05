# ts-project-exploration

## Things to investigate
- If `dependsOnSrc` depends on `src`, and something in `src` changes, will `tsc --build dependsOnSrc` automatically rebuild `src`?
    - yes!
    - Will the rebuild be incremental if `src`'s tsconfig is set to be incremental?
        - yes i assume so by the presence of a tsbuild.info....
    - If a file in `src` that's not used by `dependsOnSrc` changes, what will happen?
        - pretty cool it seems like it can tell it doesnt need to rebuild `dependsOnSrc` after rebuilding `src` (but it will still rebuild `src`):
        ```
        amyzhao@Amys-MacBook-Air ts-project-exploration % tsc --build dependsOnSrc --ver
        bose
        [12:39:59 PM] Projects in this build:
            * dependedOnBySrc/tsconfig.json
            * src/tsconfig.json
            * dependsOnSrc/tsconfig.json

        [12:39:59 PM] Project 'dependedOnBySrc/tsconfig.json' is up to date because newest input 'dependedOnBySrc/subtracter.ts' is older than oldest output 'dependedOnBySrc/built/dependedOnBySrc/subtracter.js'

        [12:39:59 PM] Project 'src/tsconfig.json' is up to date because newest input 'src/index.ts' is older than oldest output 'src/built/src/adder.js'

        [12:39:59 PM] Project 'dependsOnSrc/tsconfig.json' is up to date because newest input 'dependsOnSrc/depends_on_adder.ts' is older than oldest output 'dependsOnSrc/built/dependsOnSrc/depends_on_adder.js'

        amyzhao@Amys-MacBook-Air ts-project-exploration % tsc --build dependsOnSrc --verbose
        [12:40:27 PM] Projects in this build:
            * dependedOnBySrc/tsconfig.json
            * src/tsconfig.json
            * dependsOnSrc/tsconfig.json

        [12:40:27 PM] Project 'dependedOnBySrc/tsconfig.json' is up to date because newest input 'dependedOnBySrc/subtracter.ts' is older than oldest output 'dependedOnBySrc/built/dependedOnBySrc/subtracter.js'

        [12:40:27 PM] Project 'src/tsconfig.json' is out of date because oldest output 'src/built/src/adder.js' is older than newest input 'src/index.ts'

        [12:40:27 PM] Building project '/Users/amyzhao/Projects/ts-project-exploration/src/tsconfig.json'...

        [12:40:28 PM] Updating unchanged output timestamps of project '/Users/amyzhao/Projects/ts-project-exploration/src/tsconfig.json'...

        [12:40:28 PM] Project 'dependsOnSrc/tsconfig.json' is up to date with .d.ts files from its dependencies

        [12:40:28 PM] Updating output timestamps of project '/Users/amyzhao/Projects/ts-project-exploration/dependsOnSrc/tsconfig.json'...
        ```
- Will TS prevent you from introducing cycles?
    - Yes, I tried adding a dependency on `src` from `dependedOnBySrc` (without adding any imports that actually import code from `src`):
    ```
    error TS6202: Project references may not form a circular graph. Cycle detected: /Users/amyzhao/Projects/ts-project-exploration/dependsOnSrc/tsconfig.json
    /Users/amyzhao/Projects/ts-project-exploration/src/tsconfig.json
    /Users/amyzhao/Projects/ts-project-exploration/dependedOnBySrc/tsconfig.json
    ```
- Nested projects? What happens if you `include`d `**/*` in a parent directory?
    - They get included into the parent project (try `tsc --build src nestedSrc` or even just `tsc --build nestedSrc`). YOu get:
    ```
    error TS5083: Cannot read file '/Users/amyzhao/Projects/ts-project-exploration/nestedSrc/tsconfig.json'.
    ```
- Absolute paths?
    - hm im not sure how to get it to work