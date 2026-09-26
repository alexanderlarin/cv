import Resume from '../../components/Resume.jsx';

import content from '../../../data/en.yml';


export const metadata = {
    title: content.metadata.title,
    description: content.metadata.description,
    // Тот же английский текст лежит и на стерильной главной. canonical указывает
    // поисковику, что главной считать её, а эту страницу — общедоступным вариантом
    // с переключателем. Без этого дубликат разрешался бы на усмотрение поисковика.
    alternates: {
        canonical: '/',
        languages: {
            en: '/en',
            ru: '/ru',
        },
    },
};


export default function Page() {
    return (
        <Resume locale='en' switcher { ...content } />
    );
}
