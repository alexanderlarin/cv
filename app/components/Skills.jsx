import content from "../../data/ru.yml";

function Block({ title, items, tags }) {
    return (
        <div className="resume-skill-item">
            <h4 className="resume-skills-cat font-weight-bold">
                { title }
            </h4>
            {
                !items ? null : (
                    <ul className="list-unstyled mb-4">
                        {
                            items && items.map(({ name, level }, index) => (
                                <li key={ index } className="mb-2">
                                    <div className="resume-skill-name">{ name }</div>
                                    <div className="progress resume-progress">
                                        <div className="progress-bar theme-progress-bar-dark"
                                             role="progressbar" style={ { width: level } } aria-valuenow="25"
                                             aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                !tags ? null : (
                    <ul className="list-inline">
                        {
                            tags && tags.map((name, index) => (
                                <li key={ index } className="list-inline-item">
                                    <span className="badge badge-light">
                                        { name }
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default function Skills({ title, sections }) {
    return (
        <section className="resume-section skills-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                { title }
            </h2>
            <div className="resume-section-content">
                {
                    sections.map((item, index) => (
                        <Block key={ index } { ...item } />
                    ))
                }
            </div>
        </section>
    );
}