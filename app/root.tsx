import stylesheet from '~/tailwind.css';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { Header } from '~/components/Header';
import { cookie } from './auth.server';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export async function loader({ request }: LoaderFunctionArgs) {
    const cookieString = request.headers.get('Cookie');
    const userId: number | null = await cookie.parse(cookieString);
    return userId;
}

export default function App() {
    const userId = useLoaderData<typeof loader>();
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
                    <Header userId={userId} />
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
