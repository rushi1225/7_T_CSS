import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className='bg-red-400 py-5'>
                <h1 className='text-center font-5xl'>This is Home Page</h1>
            </div>
            <Link to="/gridcols" className='text-rushi'>GridCol Page</Link>
            <br />
            <Link to="/gridrows" >GridRow Page</Link>
            <br />
            <Link to="/cards" >Cards</Link>
            <br />
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home
