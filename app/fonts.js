import { Roboto } from 'next/font/google';

// Один экземпляр на оба корневых layout'а: иначе шрифт подключится дважды.
export const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin', 'cyrillic'],
});
