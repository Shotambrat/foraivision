export const addPhotos = (photos) => ({
    type: 'ADD_PHOTOS',
    payload: photos,
});

export const addFiles = (files) => ({
    type: 'ADD_FILES',
    payload: files,
});

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token,
})