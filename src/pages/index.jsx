import React from 'react';
import Link from 'next/link';

const Page = () => {

    return (
        <div className="">
            <h1>Home Page</h1>
            <Link href='/notes'>
                <a>Note</a>
            </Link>
        </div>
    )

}

export default Page;