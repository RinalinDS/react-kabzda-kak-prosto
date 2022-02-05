import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontolledAccordion/UncontrolledAccordion";
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(true)


    return (
        <div className="App">
             <UncontrolledOnOff onChange={setSwitchOn}/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion
                title={"Users"}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}/>
                <OnOff on={switchOn} setOn={setSwitchOn}/>


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


