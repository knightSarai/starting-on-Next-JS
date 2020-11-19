import React from 'react';
import { useRouter } from 'next/router';

const Note = () => {
    const router = useRouter();

    const { id } = router.query;

    return (
        <div className="">
            <h1>
                Note {id}
            </h1>
            <button onClick={e => router.push('/')}>Go Home</button>
            <button onClick={e => router.push('/notes/[id]', `/notes/${parseInt(id) + 1}`)}>Next Note</button>
        </div>

    )
}

export default Note;