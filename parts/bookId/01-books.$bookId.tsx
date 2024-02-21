import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ThumbDownIcon, ThumbUpIcon } from '~/components/icons';
import { allBookDetails } from '~/database';

export async function loader({ params }: LoaderFunctionArgs) {
    const bookId = params.bookId;
    if (!bookId) throw new Error('unknown book');
    return allBookDetails[bookId];
}

export default function BookDetails() {
    const bookDetails = useLoaderData<typeof loader>();

    const handleClick = (like: 'up' | 'down') => {
        console.log(like);
    };

    return (
        <div className='flex flex-col gap-4 h-full'>
            <div className='flex gap-4'>
                <div className='text-xl'>
                    {bookDetails.title} by {bookDetails.author}
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => handleClick('up')}>
                        <ThumbUpIcon className={`w-6 h-6 ${bookDetails.like === 'up' && 'stroke-green-500'}`} />
                    </button>
                    <button onClick={() => handleClick('down')}>
                        <ThumbDownIcon className={`w-6 h-6 ${bookDetails.like === 'down' && 'stroke-red-500'}`} />
                    </button>
                </div>
            </div>
            <div>First Published: {bookDetails.date}</div>

            <div>{bookDetails.blurb}</div>
            <img className='h-96 w-fit' src={`/images/${bookDetails.cover}`} alt={bookDetails.title} />
        </div>
    );
}
