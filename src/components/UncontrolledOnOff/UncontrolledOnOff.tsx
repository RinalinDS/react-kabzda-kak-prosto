import {useState} from "react";

type propsType = {
    onChange: (on: boolean) => void
    defaultOn? : boolean
}


export function UncontrolledOnOff(props: propsType) {
    console.log("UncontrolledOnOff rendering")

    const [on, setOn] = useState(props.defaultOn? props.defaultOn: false)

    const onStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
        padding: "2px",
        marginTop: "10px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red",
        padding: "2px",
        marginTop: "10px"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
        marginLeft: "5px",
        marginTop: "10px"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
const offClicked = () => {
        setOn(false)
    props.onChange(false)
}
    return (
        <div>
            <div style={onStyle} onClick={onClicked}> On</div>
            <div style={offStyle} onClick={offClicked}> Off</div>
            <div style={indicatorStyle}></div>
        </div>


    )
}