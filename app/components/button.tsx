import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
    return (
        <button
            {...props}
            ref={ref}
            className='flex w-full justify-center rounded-md bg-brand-blue px-1 py-1 text-sm font-semibold leading-6 tex-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue bg-blue-400'
        />
    );
});
Button.displayName = 'Button';
