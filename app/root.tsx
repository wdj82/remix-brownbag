import stylesheet from '~/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Header } from './components/Header';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export default function App() {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <Meta />
                <Links />
            </head>
            <body className='h-dvh'>
                <div className='flex flex-col min-h-0'>
                    <Header userId={undefined} />
                    <div className='flex-grow min-h-0 h-full'>
                        <Outlet />
                    </div>
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
