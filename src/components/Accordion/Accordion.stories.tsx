import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: "Accordion stories",
    component: Accordion
}

const callback = action('Accordion trying to change it\'s status')
const onClickCallback =  (value: any) => {
    alert(`user with id  ${value} must change himself`)
}



const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />

export const CollapsedModeAccordion = Template.bind({})

const items = [
    {title: "Denis", value: 1},
    {title: "Lesha", value: 2},
    {title: "Sasha", value: 4},
    {title: "Pasha", value: 4}
]

CollapsedModeAccordion.args = {
    title: "Menu",
    collapsed: true,
    onChange: callback,
    items: items,
    onClick: onClickCallback
}


export const UnCollapsedModeAccordion = Template.bind({})

UnCollapsedModeAccordion.args = {
    title: "Users",
    collapsed: false,
    onChange: callback,
    items: items,
    onClick: onClickCallback

}
export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [collapsedValue, setCollapsedValue] = useState<boolean>(true)
    const changeValueCallback = () => setCollapsedValue(!collapsedValue)

    return <Accordion {...args} collapsed={collapsedValue} onChange={changeValueCallback}/>
}
ModeChanging.args = {
    title: "Menu",
    items: items,
    onClick: onClickCallback
}
