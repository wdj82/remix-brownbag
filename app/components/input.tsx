import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue'
        />
    );
});
Input.displayName = 'Input';

export const Label = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ htmlFor, ...props }, ref) => {
        return <label {...props} htmlFor={htmlFor} ref={ref} className='text-sm font-medium text-gray-900' />;
    },
);
Label.displayName = 'Label';
