const Metro = require('metro');
Metro.loadConfig().then(async config => {
  Metro.runBuild(config, {
    entry: './index.ts',
    out: './dist/entry.js'
  });
});
