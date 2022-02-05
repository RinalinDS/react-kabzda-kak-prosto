import React, {useState} from "react";
import {OnOff} from "./OnOff";


export default {
    title: "OnOff stories",
    component: OnOff
}

export const OnMode = () => <OnOff on={true} setOn={x=>x}/>
export const OffMode = () => <OnOff on={false} setOn={x=>x}/>


export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean>(true)

    return <OnOff on={mode} setOn={setMode}/>
}
