import Link from 'next/link';

// Переключатель живёт только на паре /en и /ru — это общедоступные версии, где оба
// языка равноправны. Стерильная главная (/) его не показывает вовсе.
//
// Подписи — названия языков на них самих, а не коды ISO: код относится к машинному
// словарю, название объясняет себя само и проверяется глазом. По той же причине
// не нужен глобус: две подписи рядом уже сообщают, что это выбор языка.
const LOCALES = [
    { code: 'en', href: '/en', label: 'English' },
    { code: 'ru', href: '/ru', label: 'Русский' },
];

export default function LanguageSwitcher({ locale }) {
    return (
        <nav className='resume-lang-switch' aria-label='Language'>
            <ul className='options list-unstyled mb-0'>
                {
                    LOCALES.map(({ code, href, label }) => (
                        <li key={ code }>
                            {
                                code === locale
                                    ? (
                                        <span className='option current' aria-current='page'>
                                            { label }
                                        </span>
                                    )
                                    : (
                                        <Link className='option' href={ href } hrefLang={ code }
                                              lang={ code }>
                                            { label }
                                        </Link>
                                    )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
