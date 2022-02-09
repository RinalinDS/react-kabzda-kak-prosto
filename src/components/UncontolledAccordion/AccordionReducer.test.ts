import React from "react";
import {AccordionReducer} from "./AccordionReducer";

test("collapsed should be false", ()=>{

    const state = {collapsed:true}

const newState = AccordionReducer(state, {type: "CHANGE-COLLAPSED"})

expect(newState.collapsed).toBeFalsy()
})

test("collapsed should be true", ()=>{

    const state = {collapsed:false}

    const newState = AccordionReducer(state, {type: "CHANGE-COLLAPSED"})

    expect(newState.collapsed).toBeTruthy()
})