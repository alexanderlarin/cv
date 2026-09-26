import Resume from '../../components/Resume.jsx';

import content from '../../../data/ru.yml';


export const metadata = {
    title: content.metadata.title,
    description: content.metadata.description,
    alternates: {
        languages: {
            en: '/en',
            ru: '/ru',
        },
    },
};


export default function Page() {
    return (
        <Resume locale='ru' switcher { ...content } />
    );
}
