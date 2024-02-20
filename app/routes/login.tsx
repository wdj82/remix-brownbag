import type { ActionFunctionArgs } from '@remix-run/node';
import { Form, redirect, useActionData } from '@remix-run/react';
import { Link } from 'react-router-dom';
import { cookie } from '~/auth.server';
import { Button } from '~/components/button';
import { Input, Label } from '~/components/input';
import { users } from '~/database';

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
        return 'Incorrect email and or password';
    }

    return redirect('/books', {
        headers: {
            'Set-Cookie': await cookie.serialize(user.id),
        },
    });
}

export default function Login() {
    const loginError = useActionData<typeof action>();
    return (
        <div className='flex min-h-full flex-1 flex-col mt-20'>
            <h2 id='login-header' className='text-center text-2xl font-bold text-gray-900'>
                Login
            </h2>

            <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
                <Form className='flex flex-col gap-6' method='post'>
                    <div>
                        {loginError && <div className='text-red-500'>{loginError}</div>}
                        <Label htmlFor='email'>Email address </Label>
                        <Input id='email' name='email' type='email' autoComplete='email' required />
                    </div>

                    <div>
                        <Label htmlFor='password'>Password </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            aria-describedby='password-error'
                            required
                        />
                    </div>

                    <Button type='submit'>Log in</Button>

                    <div className='text-sm text-slate-500'>
                        Don't have an account?{' '}
                        <Link className='underline' to='/signup'>
                            Sign up
                        </Link>
                        .
                    </div>
                </Form>
            </div>
        </div>
    );
}
