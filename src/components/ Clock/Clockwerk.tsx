import React, {useEffect, useState} from 'react';
import AnalogView from "./AnalogView";
import {DigitalView} from "./DigitalView";


export const Clockwerk = () => {
    const [date, setDate] = useState(new Date())
    const [analog, setAnalog] = useState(false)

    useEffect(() => {
        let id = setInterval(() => {
            console.log('tick');
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])


    return (
        <>
            <button onClick={() => setAnalog(!analog)}>
                {analog ? 'Switch to analog view' : 'Switch to digital view'}</button>
            {analog
                ? <AnalogView date={date}/>
                : <DigitalView date={date}/>
            }

        </>
    );
};

