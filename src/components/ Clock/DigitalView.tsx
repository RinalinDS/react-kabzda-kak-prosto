import React from 'react';

const generateString = (num: number) => num < 10 ? '0' + num : num

type propsType = {
    date: Date
}

export const DigitalView = ({date}: propsType) => {

    return (
        <div>
            <span>{generateString(date.getHours())}:{generateString(date.getMinutes())}:{generateString(date.getSeconds())} </span>
        </div>
    );
};

