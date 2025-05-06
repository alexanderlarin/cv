export default function Languages({ title, items }) {
    return (
        <section className='resume-section language-section mb-5'>
            <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>
                { title }
            </h2>
            <div className='resume-section-content'>
                <ul className='list-unstyled resume-lang-list'>
                    {
                        items && items.map(({ idiom, level }, index) => (
                            <li key={ index } className='mb-2'>
                                                    <span className='resume-lang-name font-weight-bold'>
                                                        { idiom }
                                                    </span>
                                {
                                    level && (
                                        <small className='text-muted font-weight-normal'>
                                            { ' ' }({ level })
                                        </small>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}