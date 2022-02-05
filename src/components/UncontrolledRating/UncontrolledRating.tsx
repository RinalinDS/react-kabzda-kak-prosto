import React, {useState} from "react";


export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;


export function UncontrolledRating() {
    const [rating, setRating] = useState<RatingType>(0)

    console.log("Rating rendering")

    return (
        <div>
            <Star selected={rating > 0} handler={() => setRating(1)}/>
            <Star selected={rating > 1} handler={() => setRating(2)}/>
            <Star selected={rating > 2} handler={() => setRating(3)}/>
            <Star selected={rating > 3} handler={() => setRating(4)}/>
            <Star selected={rating > 4} handler={() => setRating(5)}/>

        </div>
    )
}


type StarPropsType = {
    selected: boolean
    handler: () => void

}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    return (
        <span onClick={props.handler}>
            {props.selected
                ? <b>star </b>
                : "star "}
        </span>
    )
}