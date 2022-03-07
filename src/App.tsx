import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {RatingType} from "./components/Rating/Rating";


function App() {
    console.log("App rendering")
    const items = [
        {title: "Denis", value: 1},
        {title: "Lesha", value: 2},
        {title: "Sasha", value: 4},
        {title: "Pasha", value: 4}
    ]

    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState(true)

    const callback = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    return (
        <div className="App">
            <Accordion onClick={setAccordionCollapsed} items={items} title={"menu"} collapsed={accordionCollapsed}
                       onChange={() => {
                       }}/>
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


