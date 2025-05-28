import Resume from '../components/Resume.jsx';

import content from '../../data/en.yml';


export const metadata = {
    title: content.metadata.title,
    description: content.metadata.description,
};


export default function Page() {
    return (
        <Resume { ...content } />
    );
}
