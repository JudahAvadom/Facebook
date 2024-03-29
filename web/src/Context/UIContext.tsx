export const initialUIState = {
    darkMode: false
}

export const UIReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_DARK_MODE':
            return {
                ...state,
                darkMode: action.payload
            }
        default:
            throw new Error(`action type ${action.type} is undefined`)
    }
}
