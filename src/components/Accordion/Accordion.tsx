import React from "react";

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * Elements that is shown in title
     */
    title: string
    /**
     * Property that affect if items will be shown or hidden
     */
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

export const Accordion = React.memo(AccordionSecret)

export function AccordionSecret(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange} value={props.collapsed} />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
    value: boolean


}

export const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const onClickCallback = ()=> props.onChange()
    return (
        <h3 onClick={onClickCallback}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value: any) => void
}

export const AccordionBody = React.memo(AccordionBodySecret)

function AccordionBodySecret(props:AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((m, index) => <li key={index} onClick={()=>props.onClick(m.value)}>{m.title}</li>)}
        </ul>
    )
}
