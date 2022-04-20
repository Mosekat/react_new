const initialState = {
    profile: {id: 4, name: 'Profile', path: "/profile"},
    contacts: [{
        name: 'Екатерина',
        email: 'mail@mail.ru',
        phone: '+7-777-77-77',
    }],
    isActive: false,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            if (state.isActive) {
                state.isActive = false;
            } else {
                state.isActive = true;
            }
            return {...state};
        default:
            return state;
    }
}
export default profileReducer;