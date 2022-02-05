import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: "OnOff stories",
    component: OnOff
}

const callback = action('on or off was clicked')

export const OnMode = () => <OnOff on={true} setOn={callback}/>
export const OffMode = () => <OnOff on={false} setOn={callback}/>


export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean>(true)

    return <OnOff on={mode} setOn={setMode}/>
}
