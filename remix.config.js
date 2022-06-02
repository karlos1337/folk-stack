/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: [
    '.*',
    '**/*.css',
    '**/*.{test,spec}.{js,jsx,ts,tsx}',
    '**/_[^_]*/**/*',
  ],
};
