import React, {useState} from "react";

import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {findAllByDisplayValue} from "@testing-library/react";


export default {
    title: "UncontrolledOnOff stories",
    component: UncontrolledOnOff
}

const callback = action('on or off was clicked')


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>

