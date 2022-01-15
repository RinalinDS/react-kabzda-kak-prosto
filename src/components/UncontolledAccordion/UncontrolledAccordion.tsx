import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    console.log("UncontrolledAccordion rendering")
    return (
            <div>
                <AccordionTitle
                    title={props.title}
                    collapsedHandler={() => setCollapsed(!collapsed)}/>
                {collapsed && <AccordionBody/>}
            </div>
        )


}

type AccordionTitlePropsType = {
    title: string
    collapsedHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => props.collapsedHandler()}>{props.title}</h3>
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
