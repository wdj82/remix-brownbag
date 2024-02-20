import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
    return (
        <div className='flex gap-6 p-4'>
            <Link to='/signup' className='text-xl font-medium underline'>
                Sign up
            </Link>

            <Link to='/login' className='text-xl font-medium underline'>
                Login
            </Link>
        </div>
    );
}
