import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { allBookDetails } from '~/database';

export async function loader({ params }: LoaderFunctionArgs) {
    const bookId = params.bookId;
    if (!bookId) throw new Error('no book id');
    const bookDetails = allBookDetails[bookId];
    return bookDetails;
}

export default function BookDetails() {
    const bookDetails = useLoaderData<typeof loader>();

    return (
        <div>
            {bookDetails.title} by {bookDetails.author}
        </div>
    );
}
