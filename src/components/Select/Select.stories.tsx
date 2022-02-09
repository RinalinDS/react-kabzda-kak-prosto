import React from "react";
import {Select} from "./Select";


export default {
    title: "Select stories",
    component: Select
}



const items = [
    {title: "Kiev", value: 1},
    {title: "Moscow", value: 2},
    {title: "Minsk", value: 3},
    {title: "Spb", value: 4}
]

export const ControlledSelect = () => {
    return <Select  items={items}/>
}