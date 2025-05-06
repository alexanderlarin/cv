export default function Education({ title, items }) {
    return (
        <section className='resume-section education-section mb-5'>
            <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>{ title }</h2>
            <div className='resume-section-content'>
                <ul className='list-unstyled'>
                    {
                        !items ? null : items.map(({ degree, university, time, theme }, index) => (
                            <li key={ index } className='mb-2'>
                                <div className='resume-degree font-weight-bold'>
                                    { degree }
                                </div>
                                <div className='resume-degree-theme'>
                                    { theme }
                                </div>
                                <div className='resume-degree-org'>
                                    { university }
                                </div>
                                <div className='resume-degree-time'>
                                    { time }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}