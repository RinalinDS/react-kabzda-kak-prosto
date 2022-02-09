import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: "input stories",

}


export const UncontrolledInput = () => <input/>
export const InputWithHardValue = () => <input value={'yo'}/>
export const TrackingValueOfUncontolledInput = () => {
    const [value, setValue] = useState('')
    return (
        <><input onChange={(e) => setValue(e.currentTarget.value)}/>
    value of input : {value} </>
)
}

export const InputWithRef = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <><input ref={inputRef}/> <button onClick={() =>{
           const element = inputRef.current as HTMLInputElement
            setValue(element.value)
        }}>save</button> value of input is : {value}</>
    )
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return (
        <input value={parentValue} onChange={onChange}/>
    )
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={parentValue} onChange={onChange}/>
    )
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>Moscow</option>
            <option value={'2'}>Kiev</option>
            <option value={'3'}>Minsk</option>
        </select>
    )
}