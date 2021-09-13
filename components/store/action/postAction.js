export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED';

export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILED = 'ADD_POST_FAILED';

export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILED = 'DELETE_POST_FAILED';

export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILED = 'UPDATE_POST_FAILED';

export const updatePosts = (payload) => ({
    type: UPDATE_POST,
    payload
});

export const updatePostsSuccess = (payload) => ({

    type: UPDATE_POST_SUCCESS,
    payload,
});

export const updatePostsFailed = (payload) => ({
    type: DELETE_POST_FAILED,
    payload,
});

export const deletePosts = (payload) => ({
    type: DELETE_POST,
    payload,
});

export const deletePostsSuccess = (payload) => ({

    type: DELETE_POST_SUCCESS,
    payload,
});

export const deletePostsFailed = (payload) => ({
    type: DELETE_POST_FAILED,
    payload,
});

export const getPosts = (payload) => ({
    type: GET_POSTS,
    payload,
});

export const getPostsSuccess = (payload) => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

export const getPostsFailed = (payload) => ({
    type: GET_POSTS_FAILED,
    payload,
});

export const addPost = (payload) => ({
    type: ADD_POST,
    payload,
});

export const addPostSuccess = (payload) => ({
    type: ADD_POST_SUCCESS,
    payload,
});

export const addPostFailed = (payload) => ({
    type: ADD_POST_FAILED,
    payload,
});
