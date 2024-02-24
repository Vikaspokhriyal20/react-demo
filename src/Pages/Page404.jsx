import React from 'react'
import Error from './Page404.module.css'
const Nopage = () => {
    return (
        <>
            <main className={Error.container}>
                <h1>This page is not found</h1>
                <p>404</p>
            </main>
        </>
    )
}

export default Nopage
