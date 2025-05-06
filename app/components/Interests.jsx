export default function Interests({ title, items }) {
    <section className='resume-section interests-section mb-5'>
        <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>
            { title }
        </h2>
        <div className='resume-section-content'>
            <ul className='list-unstyled'>
                {
                    items && items.map(({ item, link }, index) => (
                        <li key={ index } className='mb-1'>{ item }</li>
                    ))
                }
            </ul>
        </div>
    </section>
}
