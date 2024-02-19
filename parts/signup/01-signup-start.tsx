import { Form, Link } from '@remix-run/react';
import { Label, Input } from '~/components/input';
import { Button } from '~/components/button';

export const meta = () => {
    return [{ title: 'Signup' }];
};

export default function Signup() {
    return (
        <div className='flex min-h-full flex-1 flex-col mt-20'>
            <h2 id='signup-header' className='text-center text-2xl font-bold text-gray-900'>
                Sign up
            </h2>

            <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12 mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
                <Form className='flex flex-col gap-6' method='post'>
                    <div>
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
