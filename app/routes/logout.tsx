import { redirect } from '@remix-run/node';
import { cookie } from '~/auth.server';

export async function action() {
    return redirect('/', {
        headers: {
            'Set-Cookie': await cookie.serialize('', { maxAge: 0 }),
        },
    });
}
