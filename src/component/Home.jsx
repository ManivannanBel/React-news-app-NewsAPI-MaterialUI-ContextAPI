import React from 'react'
import NewsList from './NewsList';

function Home() {
    const mystyle = {
        textAlign : 'center',
        width : '100%',
        fontSize : '25px'
    };
    return (
        <div style={mystyle}>
            Home
        <NewsList/>
        </div>
    )
}

export default Home
