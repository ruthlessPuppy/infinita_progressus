import * as React from 'react';
const SuccessSvgIcon = (props) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: 'var(--bs-green)' }}
        {...props}
    >
        <path
            d="m8.5 12.5 2 2 5-5"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            stroke="currentColor"
            d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
            strokeWidth={1.5}
            strokeLinecap="round"
        />
    </svg>
);
export default SuccessSvgIcon;
