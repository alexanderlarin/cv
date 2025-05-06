import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header({ name, tagline, photo, contacts, links, image }) {
    return (
        <header className='resume-header pt-4 pt-md-0'>
            <div className='row'>
                <div className='col-block col-md-auto resume-picture-holder text-center text-md-start'>
                    <img className='picture' src='../avatar.jpg' alt=''/>
                </div>
                <div className='col'>
                    <div className='row p-4 justify-content-between'>
                        <div className='primary-info col-auto'>
                            <h1 className='name mt-0 mb-1 text-white text-uppercase text-uppercase'>
                                { name }
                            </h1>
                            <div className='title mb-3'>
                                { tagline}
                            </div>
                            <ul className='list-unstyled'>
                                <li>
                                    <a className='text-link' href={ `tel:${ contacts.phone }` }>
                                        <FontAwesomeIcon icon={ 'fas fa-mobile-alt' } className={ 'fa-fw me-2' }
                                                         transform={ 'grow-3' }/>
                                        { contacts.phone }
                                    </a>
                                </li>
                                <li>
                                    <a className='text-link' href={ `mailto:${ contacts.email }` }>
                                        <FontAwesomeIcon icon={ 'fas fa-envelope' } className={ 'fa-fw me-2' }
                                                         transform={ 'grow3' }/>
                                        { contacts.email }
                                    </a>
                                </li>
                                <li>
                                    <a className='text-link' href={ `https://t.me/${ contacts.telegram }` }>
                                        <FontAwesomeIcon icon={ 'fab fa-telegram' } className={ 'fa-fw me-2' }
                                                         transform={ 'grow-3' }/>
                                        { contacts.telegram }
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='secondary-info col-auto mt-2'>
                            <ul className='resume-social list-unstyled'>
                                <li className='mb-3'>
                                    <a className='text-link'
                                       href={ `https://www.linkedin.com/in/${ links.linkedin }` }>
                                                <span className='fa-container text-center me-2'>
                                                    <FontAwesomeIcon icon='fab fa-linkedin-in' className={ 'fa-fw' }/>
                                                </span>
                                        { links.linkedin }
                                    </a>
                                </li>
                                <li className='mb-3'>
                                    <a className='text-link' href={ `https://github.com/${ links.github }` }>
                                                <span className='fa-container text-center me-2'>
                                                    <FontAwesomeIcon icon='fab fa-github' className={ 'fa-fw' }/>
                                                </span>
                                        { links.github }
                                    </a>
                                </li>
                                <li className='mb-3'>
                                    <a className='text-link' href={ `https://www.researchgate.net/profile/${ links.researchgate }` }>
                                                <span className='fa-container text-center me-2'>
                                                    <FontAwesomeIcon icon='fab fa-researchgate' className={ 'fa-fw' }/>
                                                </span>
                                        { links.researchgate }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}