export const initialUserState : any = {
    users: [],
    isLoggedIn: false,
}

export const UserReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                users: action.payload,
                isLoggedIn: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                users: [],
                isLoggedIn: false,
            }
        default:
            break;
    }
}

