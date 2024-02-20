import { Form } from '@remix-run/react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/button';
import { Input, Label } from '~/components/input';

export default function Login() {
    return (
        <div className='flex min-h-full flex-1 flex-col mt-20'>
            <h2 id='login-header' className='text-center text-2xl font-bold text-gray-900'>
                Login
            </h2>

            <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
                <Form className='flex flex-col gap-6' method='post'>
                    <div>
                        <Label htmlFor='email'>Email address </Label>
                        {/* {actionData?.emailError && <span className='text-red-500'>{actionData?.emailError}</span>} */}
                        <Input id='email' name='email' type='email' autoComplete='email' required />
                    </div>

                    <div>
                        <Label htmlFor='password'>Password </Label>
                        {/* {actionData?.passwordError && <span className='text-red-500'>{actionData?.passwordError}</span>} */}
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
