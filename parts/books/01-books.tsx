import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { bookList } from '~/database';

export async function loader() {
    return bookList;
}

export default function Books() {
    const books = useLoaderData<typeof loader>();

    return (
        <div>
            {books.map((book) => {
                return (
                    <div key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </div>
                );
            })}
            <Outlet />
        </div>
    );
}
