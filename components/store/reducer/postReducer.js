import {
    ADD_POST,
    ADD_POST_FAILED,
    ADD_POST_SUCCESS,
    GET_POSTS,
    GET_POSTS_FAILED,
    GET_POSTS_SUCCESS,
    DELETE_POST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILED,
} from '../action/postAction';

const initialState = {
    isLoading: false,
    posts: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS:
            // //debugger;
            return {
                ...state,

            };

        case GET_POSTS_SUCCESS:
            // //debugger;
            return {
                ...state,
                posts: payload,
                isLoading: false,
            };
        case GET_POSTS_FAILED:

        case ADD_POST:
            // debugger;

            return {
                ...state, isLoading: true,
                // posts: [...state.posts, payload]
            };
        case ADD_POST_FAILED:

            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        case ADD_POST_SUCCESS:
            // debugger;

            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, payload]

            };
        case DELETE_POST:
            // debugger;

            return {
                ...state, isLoading: true,
                // posts: [...state.posts]
            };
        case DELETE_POST_SUCCESS:
            // debugger;
            return {
                ...state,
                posts: [...state.posts.filter(todo => todo.id !== payload.id)],
                isLoading: false,

            };
        case DELETE_POST_FAILED:
            //debugger;

            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        case UPDATE_POST:
            //debugger;
            return {
                ...state, isLoading: true,

            }
        case UPDATE_POST_SUCCESS:
            // debugger;

            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === payload.data.id) {
                        item.userId = payload.data.userId;
                        item.title = payload.data.title;
                        item.body = payload.data.body;
                    }
                    return item;
                }),
                isLoading: false,

            };
        case UPDATE_POST_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};
