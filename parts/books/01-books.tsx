import { Link, Outlet } from '@remix-run/react';
import { books } from '~/database';

export default function Books() {
    return (
        <div className='flex'>
            <div className='flex flex-col gap-4 h-full p-2'>
                {books.map((book) => {
                    return (
                        <div key={book.id}>
                            <Link className='underline' to={`/books/${book.id}`}>
                                {book.title}
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className='flex-1 p-2'>
                <Outlet />
            </div>
        </div>
    );
}
