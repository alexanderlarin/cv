import './global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fas, fab);

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin', "cyrillic"],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={ roboto.className }>
        <body>
        { children }
        </body>
        </html>
    );
}
