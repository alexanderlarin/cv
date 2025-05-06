export const metadata = {
    title: 'Next.js on GitHub Pages',
    description: 'Deploy your static Next.js site to GitHub Pages.',
};

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
