import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { bookList } from '~/database';

export async function loader() {
    const books = bookList;
    console.log(books);
    return books;
}

export default function Books() {
    const books = useLoaderData<typeof loader>();

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
