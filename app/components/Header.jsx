import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faResearchgate, faTelegram } from '@fortawesome/free-brands-svg-icons';

import avatar from '../avatar.jpg';


export default function Header({ name, tagline, photo, contacts, links, image, locale, switcher }) {
    return (
        <header className='resume-header pt-4 pt-md-0'>
            <div className='row'>
                {/* col-12 ниже md, а не отсутствующий col-block: иначе колонка остаётся
                    без класса, text-center нечего центрировать и соседняя колонка
                    переносится вниз. */}
                <div className='col-12 col-md-auto resume-picture-holder text-center text-md-start'>
                    <Image className='picture' src={ avatar } alt={ name } priority/>
                </div>
                <div className='col'>
                    <div className={ `row px-4 ${ switcher ? 'pb-2' : 'pb-4' } pt-4 justify-content-between` }>
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
                                        <FontAwesomeIcon icon={ faMobileAlt } className={ 'fa-fw me-2' }
                                                         transform={ 'grow-3' }/>
                                        { contacts.phone }
                                    </a>
                                </li>
                                <li>
                                    <a className='text-link' href={ `mailto:${ contacts.email }` }>
                                        <FontAwesomeIcon icon={ faEnvelope } className={ 'fa-fw me-2' }
                                                         transform={ 'grow3' }/>
                                        { contacts.email }
                                    </a>
                                </li>
                                <li>
                                    <a className='text-link' href={ `https://t.me/${ contacts.telegram }` }>
                                        <FontAwesomeIcon icon={ faTelegram } className={ 'fa-fw me-2' }
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
                                                    <FontAwesomeIcon icon={ faLinkedinIn } className={ 'fa-fw' }/>
                                                </span>
                                        { links.linkedin }
                                    </a>
                                </li>
                                <li className='mb-3'>
                                    <a className='text-link' href={ `https://github.com/${ links.github }` }>
                                                <span className='fa-container text-center me-2'>
                                                    <FontAwesomeIcon icon={ faGithub } className={ 'fa-fw' }/>
                                                </span>
                                        { links.github }
                                    </a>
                                </li>
                                <li className='mb-3'>
                                    <a className='text-link' href={ `https://www.researchgate.net/profile/${ links.researchgate }` }>
                                                <span className='fa-container text-center me-2'>
                                                    <FontAwesomeIcon icon={ faResearchgate } className={ 'fa-fw' }/>
                                                </span>
                                        { links.researchgate }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    { switcher && (
                        <div className='row px-4 pb-3'>
                            <div className='col text-end'>
                                <LanguageSwitcher locale={ locale }/>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </header>
    );
}