import {useState} from "react";

type propsType = {

}


export function OnOff(props: propsType) {
    console.log("OnOff rendering")

    const [on, setOn] = useState(true)

    const onStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
        padding: "2px",
        marginTop : "10px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red",
        padding: "2px",
        marginTop : "10px"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",
        marginLeft: "5px",
        marginTop : "10px"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}> On</div>
            <div style={offStyle} onClick={() => setOn(false)}> Off</div>
            <div style={indicatorStyle}></div>
        </div>


    )
}