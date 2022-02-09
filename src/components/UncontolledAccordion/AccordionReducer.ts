type StateType = {
    collapsed: boolean
}
export const CHANGE_COLLAPSED = "CHANGE-COLLAPSED"

type ActionType = {
    type: "CHANGE-COLLAPSED"
}



export const AccordionReducer = (state: StateType, action : ActionType):StateType => {
    switch(action.type) {
        case CHANGE_COLLAPSED :
            return {...state, collapsed: !state.collapsed}
        default:
            return state


    }
}