import {useState} from "react";

type propsType = {
    on: boolean
    setOn: (value: boolean) => void
}


export function UncontrolledOnOff(props: propsType) {
    console.log("OnOff rendering")



    const onStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white",
        padding: "2px",
        marginTop : "10px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red",
        padding: "2px",
        marginTop : "10px"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red",
        marginLeft: "5px",
        marginTop : "10px"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.setOn(true)}> On</div>
            <div style={offStyle} onClick={() => props.setOn(false)}> Off</div>
            <div style={indicatorStyle}></div>
        </div>


    )
}