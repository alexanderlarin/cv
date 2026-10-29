import Markdown from 'react-markdown';

const Tags = ({ tags }) => (
    <>
        {/*<h4 className='resume-timeline-item-desc-heading font-weight-bold'>*/}
        {/*    Technologies used:*/}
        {/*</h4>*/}
        <ul className='list-inline'>
            {
                tags.map((tag, index) => (
                    <li key={ index } className='list-inline-item'>
                                        <span className='badge bg-secondary badge-pill'>
                                            { tag }
                                        </span>
                    </li>
                ))
            }
        </ul>
    </>
);

export function Experience({ role, company, location, time, detail, achievements, achievementsTitle, tags, className }) {
    return (
        <article className={ `resume-timeline-item position-relative ${className}` }>
            <div className='resume-timeline-item-header mb-2'>
                <div className='resume-position-header'>
                    <div>
                        <h3 className='resume-position-title font-weight-bold mb-1'>
                            { role }
                        </h3>
                        { time && <div className='resume-position-time'>{ time }</div> }
                    </div>
                    { company && <div className='resume-company-name'>
                        { company }
                        { location && <div className='resume-company-location'>{ location }</div> }
                    </div> }
                </div>
            </div>

            <div className='resume-timeline-item-desc'>
                <Markdown>
                    { detail }
                </Markdown>
                {
                    !achievements ? null : (
                        <>
                            <h4 className='resume-timeline-item-desc-heading font-weight-bold'>
                                { achievementsTitle }:
                            </h4>
                            <Markdown>
                                { achievements }
                            </Markdown>
                        </>
                    )
                }
                { tags && <Tags tags={ tags } /> }
            </div>
        </article>
    );
}

export default function Experiences({ title, achievements_title, info }) {
    return (
        <section className='resume-section experience-section mb-5'>
            <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>
                { title }
            </h2>
            <div className='resume-section-content'>
                <div className='resume-timeline position-relative'>
                    {
                        info.map((item, index) => (
                            <Experience key={ index } className={ index === info.length - 1 ? '' : 'pb-5' }
                                        achievementsTitle={ achievements_title } { ...item } />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
