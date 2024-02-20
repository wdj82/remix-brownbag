import { Link } from '@remix-run/react';

export function Header({ userId }: { userId: number | null }) {
    return (
        <header className='bg-slate-900 border-b border-slate-800 flex items-center justify-between py-4 px-8'>
            <Link to='/books'>
                <div className='text-2xl text-white'>BetterReads</div>
            </Link>
            <div>
                {userId !== null ? (
                    <form method='post' action='/logout'>
                        <button className='text-white'>Logout</button>
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
