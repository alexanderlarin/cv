export default function Awards({ title, items }) {
    return (
        <section className='resume-section reference-section mb-5'>
            <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>
                { title }
            </h2>
            <div className='resume-section-content'>
                <ul className='list-unstyled resume-awards-list'>
                    {
                        items && items.map(({ item, detail }, index) => (
                            <li key={ index } className='mb-2 position-relative'>
                                <i className='resume-award-icon fas fa-trophy position-absolute'
                                   data-fa-transform='shrink-2' />
                                <div className='resume-award-name'>
                                    { item }
                                </div>
                                <div className='resume-award-desc'>
                                    { detail }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}