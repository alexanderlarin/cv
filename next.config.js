import withYaml from 'next-plugin-yaml';

const nextConfig = withYaml({
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
});

export default nextConfig;