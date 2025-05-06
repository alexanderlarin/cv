import './global.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fas, fab);

import content from '../data/ru.yml';

import Header from './components/Header';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Summary from './components/Summary';
import Education from './components/Education';
import Languages from './components/Languages';
import Interests from './components/Interests.jsx';


export default function Home() {
    return (
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                <Header name={ content.name } tagline={ content.tagline } contacts={ content.contacts } links={ content.links} />
                <div className="resume-body p-5">
                    { content.summary && <Summary { ...content.summary }/> }
                    <div className="row">
                        <div className="col-lg-9">
                            { content.experiences && <Experiences { ...content.experiences } /> }
                        </div>
                        <div className="col-lg-3">
                            { content.skills && <Skills { ...content.skills } /> }
                            { content.education && <Education { ...content.education } /> }
                            {/*{ content.awards && <Awards { ...content.awards } /> }*/}
                            { content.languages && <Languages { ...content.languages } /> }
                            { content.interests && <Interests { ...content.interests } /> }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
