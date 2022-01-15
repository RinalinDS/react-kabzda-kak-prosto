import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating, RatingType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/Accordion/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontolledAccordion/UncontrolledAccordion";


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(true)


    return (
        <div className="App">
             <OnOff/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                title={"Users"}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}/>
                <UncontrolledOnOff on={on} setOn={setOn}/>


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <div>{props.title} </div>

}

export default App;


