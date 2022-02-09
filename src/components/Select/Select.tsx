import React, {ChangeEvent, useState} from "react";

type ItemsType = {
    title: string
    value: any
}


type SelectPropsType = {
    items: ItemsType[]

}

export const Select = (props: SelectPropsType) => {
    const [parentValue, setParentValue] = useState<string | undefined>("City")
    const [collapsed, setCollapsed] = useState(true)
    const onChange = () => {
        setCollapsed(!collapsed)

    }
    const callback = (value: any) => {
        const item = props.items.filter(f => f.value === value)
        setParentValue(item[0].title)
        onChange()
    }
    return (
        <>
            <div onClick={onChange}>{parentValue}</div>
            {collapsed && <SelectOptions items={props.items} callback={callback} value={parentValue}/>}

        </>
    )
}


type SelectOptionsPropsType = {
    items: ItemsType[]
    callback: (value: any) => void
    value: any
}

export const SelectOptions = (props: SelectOptionsPropsType) => {
    return (
        <>
            {props.items.filter(f=> f.title !== props.value).map((m, index) => <div onClick={()=>props.callback(m.value)}>{m.title}</div>)}
        </>
    )
}