import Resume from '../components/Resume.jsx';

import content from '../../data/en.yml';


export const metadata = {
    title: content.metadata.title,
    description: content.metadata.description,
    // Ни alternates, ни переключателя: это ссылка для личной отправки, она не
    // сообщает о существовании других версий. Пара /en и /ru живёт отдельно.
};


export default function Page() {
    return (
        <Resume locale='en' { ...content } />
    );
}
