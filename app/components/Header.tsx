import { Link } from '@remix-run/react';

export function Header({ userId }: { userId: string | undefined }) {
    return (
        <header className='bg-slate-900 border-b border-slate-800 flex items-center justify-between py-4 px-8'>
            <Link to='/home'>
                <div className='text-2xl text-white'>Remix Demo</div>
            </Link>
            <div>
                {userId ? (
                    <form method='post' action='/logout'>
                        <button>Logout</button>
                    </form>
                ) : (
                    <Link to='login' className='text-white'>
                        Login
                    </Link>
                )}
            </div>
        </header>
    );
}
