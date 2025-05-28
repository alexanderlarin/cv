import Header from './Header';
import Skills from './Skills';
import Experiences from './Experiences';
import Summary from './Summary';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests.jsx';
import Awards from './Awards';

export default function Resume({ name, tagline, contacts, links, summary, experiences, education, skills, languages, interests, awards }) {
    return (
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
                <Header name={ name } tagline={ tagline } contacts={ contacts } links={ links }/>
                <div className="resume-body p-5">
                    { summary && <Summary { ...summary }/> }
                    <div className="row">
                        <div className="col-lg-9">
                            { experiences && <Experiences { ...experiences } /> }
                        </div>
                        <div className="col-lg-3">
                            { skills && <Skills { ...skills } /> }
                            { education && <Education { ...education } /> }
                            {/*{ awards && <Awards { ...awards } /> }*/ }
                            { languages && <Languages { ...languages } /> }
                            { interests && <Interests { ...interests } /> }
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
