import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {
    console.log('SimpleExample');
    const [count, setCount] = useState(0)
    const [fakeCount, setFakeCount] = useState(0)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect on Mount/ analog ComponentDidMount()')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect on every dependency change , current deps is count')
        document.title = count.toString()
    }, [count])
    return (
        <div>
            {count} -----
            {fakeCount}

            <button onClick={() => setCount(state => state + 1)}> + count</button>
            <button onClick={() => setFakeCount(state => state + 1)}> + fakeCount</button>
        </div>
    )
}


export const SetTimeoutExample = () => {

    const [count, setCount] = useState(0)
    const [fakeCount, setFakeCount] = useState(0)

    useEffect(() => {
        console.log('useEffect setTimeout, count: ', count)


        // нужно открыть iframe в инспекте сторибука, чтобы видеть изменения тайтла
        setTimeout(() => {
            console.log('setTimeout');
            document.title = count.toString()
        }, 1000)

    }, [count])


    return (
        <div>
            {count} -----
            {fakeCount}

            <button onClick={() => setCount(state => state + 1)}> + count</button>
            <button onClick={() => setFakeCount(state => state + 1)}> + fakeCount</button>
        </div>
    )
}

export const SetIntervalExample = () => {

    const [count, setCount] = useState(0)
    const [fakeCount, setFakeCount] = useState(0)

    /* useEffect(()=> {
         console.log('useEffect, count: ', count)
         setInterval(()=> {
             console.log('tick');
             setCount(count + 1)
             // всегда будет 0 + 1, т.к. без зависимостей 1 раз вызвался эффект при вмонтировании, создалось замыкание в котором коунт = 0,
             // и постоянно оттуда берется этот 0 , и к нему прибавляется единица,
             // поэтому всегда будет отображаться 1, но операция будет каждую секунду проходить 0 +1

         }, 1000)

     }, [])*/

    useEffect(() => {
        let intervalID = setInterval(() => {
            setCount(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            {count} -----
            {fakeCount}

            <button onClick={() => setCount(state => state + 1)}> + count</button>
            <button onClick={() => setFakeCount(state => state + 1)}> + fakeCount</button>
        </div>
    )
}

export const SimpleClockExampleMyVariant = () => {

    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())


    /* useEffect(()=> {
         console.log('useEffect, count: ', count)
         setInterval(()=> {
             console.log('tick');
             setCount(count + 1)
             // всегда будет 0 + 1, т.к. без зависимостей 1 раз вызвался эффект при вмонтировании, создалось замыкание в котором коунт = 0,
             // и постоянно оттуда берется этот 0 , и к нему прибавляется единица,
             // поэтому всегда будет отображаться 1, но операция будет каждую секунду проходить 0 +1

         }, 1000)

     }, [])*/

    useEffect(() => {
        let intervalID = setInterval(() => {
            console.log('tick');
            setHours(new Date().getHours())
            setMinutes(new Date().getMinutes())
            setSeconds(new Date().getSeconds())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            CurrentTime : {hours}:{minutes}:{seconds}


        </div>
    )
}


export const ResetEffectStory = () => {

    const [count, setCount] = useState(0)
    console.log('component rendered');


    useEffect(() => {
        console.log('Effect occurred');
        return () => {
            console.log('reset effect')
        }
    }, [])

    return (
        <div>
            Current count: {count}


            <button onClick={() => setCount(state => state + 1)}> + count</button>

        </div>
    )
}
