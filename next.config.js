import withYaml from 'next-plugin-yaml';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const nextConfig = (phase) => withYaml({
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  // При output: 'export' Next использует .next для сборки независимо от distDir.
  // Отдельный каталог разработки предотвращает перезапись чанков dev-сервера.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  // Статический экспорт не может использовать серверный оптимизатор изображений,
  // поэтому next/image работает в режиме без оптимизации. Всё остальное —
  // размеры из статического импорта, basePath, priority — продолжает работать.
  images: { unoptimized: true },
});

export default nextConfig;
