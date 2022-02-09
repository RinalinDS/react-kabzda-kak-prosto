import React, {useState} from "react";
import {ItemType, Selector} from "./Selector";
import {action} from "@storybook/addon-actions";



export default {
    title: "Selector(dimych) stories",
    component: Selector
}



const items: ItemType[] = [
    {title: "Kiev", value: '1'},
    {title: "Moscow", value: '2'},
    {title: "Minsk", value: '3'},
    {title: "Spb", value: '4'}
]

export const ControlledSelector = () => {
    const [value, setValue] = useState('2')
    return <Selector value={value} onChange={setValue} items={items} />
}



export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Selector value={value} onChange={setValue} items={items} />
}

