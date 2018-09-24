import * as types from "../constants/ActionTypes";

var initialState = [
    {
        name: 'Nộp bài cho anh Chiến đẹp trai'
    },
    {
        name: 'Pha cà phê cho anh Chiến'
    },
    {
        name: 'Mua bánh cho anh Huy'
    },
    {
        name: 'Làm bài tập React'
    }
];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_LIST:
            return state;

        case types.ADD_ITEM:
            var newList = {
                name: action.value
            };
            state.push(newList);
            return [...state];

        case types.DELETE_ITEM:
            state.splice(action.id, 1);
            return [...state];
            
        case types.EDIT_ITEM:
            state[action.id] = action.value;
            return [...state];
            
        default: 
            return state;
    }
}

export default myReducer;