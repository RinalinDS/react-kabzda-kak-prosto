import React, {useEffect, useState} from 'react';

const generateString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
       let id =  setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    /*  const getSecondsString = () => date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      const getMinutesString = () => date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const getHoursString = () => date.getHours() < 10 ? '0' + date.getHours() : date.getHours()*/

    // const generateString = (num: number) => num < 10 ? '0' + num : num // вынесена за пределы функции.


    return (
        <>


            <div>
                <span>   {generateString(date.getHours())}:{generateString(date.getMinutes())}:{generateString(date.getSeconds())} </span>
            </div>


        </>
    );
};

export default Clock;