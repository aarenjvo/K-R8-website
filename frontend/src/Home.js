import { Fragment, useState } from 'react'
import Nav from './Nav'

function Home() {

    return (
        <Fragment>
            <Nav />
            <main className='fixed'>
                <h1>HOME</h1>
            </main>
        </Fragment>
    )
}

export default Home