import Script from 'next/script';

// Идентификатор приходит из переменной окружения, которая задаётся в GitHub:
// Settings -> Secrets and variables -> Actions -> Variables -> PUBLIC_GA_ID.
// Он не секрет и всё равно виден в исходном коде страницы, поэтому лежит в
// Variables, а не в Secrets: секреты маскируются в логах и мешают отладке.
//
// Имя намеренно без префикса NEXT_PUBLIC_. В Next этот префикс не косметика: только
// с ним переменная попадает в браузерный бандл. Здесь он не нужен, потому что файл —
// СЕРВЕРНЫЙ компонент: значение читается на этапе сборки и впекается прямо в готовый
// HTML, до браузерного кода дело не доходит.
//
// ВНИМАНИЕ: если этому файлу когда-нибудь понадобится 'use client', переменная станет
// undefined и аналитика молча исчезнет. Тогда имя придётся вернуть с префиксом.
//
// На машине разработчика переменной нет, поэтому компонент ничего не отдаёт и
// статистика не засоряется собственными заходами.
const GA_ID = process.env.PUBLIC_GA_ID;

export default function Analytics() {
    if (!GA_ID) {
        return null;
    }

    return (
        <>
            <Script src={ `https://www.googletagmanager.com/gtag/js?id=${ GA_ID }` }
                    strategy='afterInteractive'/>
            <Script id='ga-config' strategy='afterInteractive'>
                {
                    // client_storage: 'none' отключает запись кук. Согласие посетителя
                    // требуется именно из-за них, поэтому без кук не нужен и баннер.
                    // Цена: GA перестаёт отличать вернувшегося посетителя от нового.
                    // Просмотры, источники переходов и страны считаются по-прежнему.
                    `window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '${ GA_ID }', { client_storage: 'none' });`
                }
            </Script>
        </>
    );
}
