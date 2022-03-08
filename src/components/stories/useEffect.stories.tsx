import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    console.log('SimpleExample');
    const [count, setCount] = useState(0)
    const [fakeCount, setFakeCount] = useState(0)

    useEffect(()=> {
        console.log('useEffect every render')
        document.title = count.toString()
    })
    useEffect(()=> {
        console.log('useEffect on Mount/ analog ComponentDidMount()')
        document.title = count.toString()
    }, [])
    useEffect(()=> {
        console.log('useEffect on every dependency change , current deps is count')
        document.title = count.toString()
    }, [count])
    return (
        <div>
            {count}   -----
            {fakeCount}

            <button onClick={()=> setCount(state => state + 1)}> + count </button>
            <button onClick={()=> setFakeCount(state => state + 1)}> + fakeCount </button>
        </div>
    )
}