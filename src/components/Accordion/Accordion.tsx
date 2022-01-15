import React, {useState} from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
}

export function Accordion(props: AccordionPropsType) {

    console.log("UncontrolledAccordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} collapse={props.setAccordionCollapsed} value={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    collapse: (value: boolean) => void
    value: boolean

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={()=> props.collapse(!props.value)}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
