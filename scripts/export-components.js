/* eslint-disable @typescript-eslint/no-var-requires */
// If a dry run, return as the dependencies will not have been installed
if (process.env.npm_config_dry_run === 'true') {
  return;
}

const fs = require('fs');

const glob = require('glob');

glob(`${__dirname}/../src/components/**/!(*.stories).tsx`, {}, (err, files) => {
  const components = files.map((file) => {
    const start = file.indexOf('src/components/') + 4;
    const path = file.slice(start);
    const name = path.split('\\').pop().split('/').pop().replace('.tsx', '');
    const pathNoExt = path.replace('.tsx', '');

    return `export { default as ${name} } from './${pathNoExt}';\nexport * from './${pathNoExt}';`;
  });

  fs.writeFileSync(
    'src/index.tsx',
    `${[
      '// DO NOT EDIT - Autogenerated by /scripts/export-components.js',
      ...components,
    ].join('\r\n')}\r\n`,
  );
});
