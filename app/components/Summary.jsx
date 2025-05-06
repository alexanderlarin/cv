import Markdown from 'react-markdown';

export default function Summary({ title, description }) {
    return (
        <section className='resume-section summary-section mb-5'>
            <h2 className='resume-section-title text-uppercase font-weight-bold pb-3 mb-3'>
                { title }
            </h2>
            <div className='resume-section-content'>
                {/*<p className='mb-0'>*/ }
                <Markdown
                    components={ {
                        p({ className, children, ...props }) {
                            return <p className={ `${ className } mb-0` }>{ children }</p>;
                        },
                    } }>
                    { description }
                </Markdown>
                {/*</p>*/ }
            </div>
        </section>
    );
}