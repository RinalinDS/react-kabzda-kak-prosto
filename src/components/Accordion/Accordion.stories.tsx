import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action('Accordion trying to change it\'s status')

export const CollapsedAccordion = () => <Accordion title={"Menu"} collapsed={true} setAccordionCollapsed={callback} />
export const UnCollapsedAccordion = () => <Accordion title={"Users"} collapsed={false} setAccordionCollapsed={callback} />



export const ChangingAccordion = () => {
    const [collapsedValue , setCollapsedValue] = useState<boolean>(true)
    return <Accordion title={"W/e"} collapsed={collapsedValue} setAccordionCollapsed={setCollapsedValue} />
}

