import React from 'react'
import NewsList from './NewsList';

function Home() {
    const mystyle = {
        marginTop : '20px',
        textAlign : 'center',
        width : '100%',
        fontSize : '25px',
        display : 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px'
    };
    return (
        <div style={mystyle}>
        <NewsList catagory={'Technology'}/>
        <NewsList catagory={'Business'}/>
        </div>
    )
}

export default Home
