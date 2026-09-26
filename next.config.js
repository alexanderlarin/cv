import withYaml from 'next-plugin-yaml';

const nextConfig = withYaml({
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  // next dev и next build пишут в одну и ту же .next: сборка, запущенная рядом
  // с работающим dev-сервером, затирает его чанки, и страница открывается без
  // стилей. Проверочные сборки запускать с NEXT_DIST_DIR=.next-verify.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // Статический экспорт не может использовать серверный оптимизатор изображений,
  // поэтому next/image работает в режиме без оптимизации. Всё остальное —
  // размеры из статического импорта, basePath, priority — продолжает работать.
  images: { unoptimized: true },
});

export default nextConfig;