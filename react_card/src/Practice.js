import React, { useEffect, useState } from 'react'
import './index.css'
export default function Practice() {
    const [set , setCount] = useState(0);
    const [sets , setCounts] = useState(0);
    
    useEffect(() => {
        alert(set)
    },[set])
    return (
        <>
            <div className="mainContainer flex">
                <button className='btn' onClick={() => setCount(set + 1)}>increment<h1>{set}</h1></button>
                <button  className='btn' onClick={() => setCounts(sets + 1)}>increment<h1>{sets}</h1></button>
            </div>
        </>
    )
}
