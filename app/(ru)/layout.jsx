import '../global.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Analytics from '../analytics';
import { roboto } from '../fonts';

// Два корневых layout'а вместо одного: язык страницы должен объявляться честно,
// а общий layout не знает, какой из маршрутов он оборачивает. Группы маршрутов
// (en) и (ru) не участвуют в адресе — он остаётся / и /ru.
export default function RussianLayout({ children }) {
    return (
        <html lang='ru' className={ roboto.className }>
        <body>
        { children }
        <Analytics/>
        </body>
        </html>
    );
}
