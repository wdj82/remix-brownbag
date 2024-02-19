import { Form, Link, redirect, useActionData } from '@remix-run/react';
import { Label, Input } from '~/components/input';
import { Button } from '~/components/button';
import type { ActionFunctionArgs } from '@remix-run/node';
import { database } from '~/database';

export const meta = () => {
    return [{ title: 'Signup' }];
};

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    const errors = { emailError: '', passwordError: '' };
    if (database.some((user) => user.email === email)) {
        errors.emailError = 'Email already in use';
    }
    if (password.length < 8) {
        errors.passwordError = 'Password must be at least 8 characters';
    }
    if (errors.passwordError || errors.emailError) {
        return errors;
    }
    return redirect('/');
}

export default function Signup() {
    const actionData = useActionData<typeof action>();

    return (
        <div className='flex min-h-full flex-1 flex-col mt-20'>
            <h2 id='signup-header' className='text-center text-2xl font-bold text-gray-900'>
                Sign up
            </h2>

            <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
                <Form className='flex flex-col gap-6' method='post'>
                    <div>
                        <Label htmlFor='email'>Email address </Label>
                        {actionData?.emailError && <span className='text-red-500'>{actionData?.emailError}</span>}
                        <Input id='email' name='email' type='email' autoComplete='email' required />
                    </div>

                    <div>
                        <Label htmlFor='password'>Password </Label>
                        {actionData?.passwordError && <span className='text-red-500'>{actionData?.passwordError}</span>}
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            aria-describedby='password-error'
                            required
                        />
                    </div>

                    <Button type='submit'>Sign in</Button>

                    <div className='text-sm text-slate-500'>
                        Already have an account?{' '}
                        <Link className='underline' to='/login'>
                            Log in
                        </Link>
                        .
                    </div>
                </Form>
            </div>
        </div>
    );
}
