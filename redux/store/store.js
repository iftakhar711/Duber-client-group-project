import { configureStore } from '@reduxjs/toolkit'
import addTrnsportSlice from '../slies/addTrnsportSlice';
import signupSlice from '../slies/signupSlice';

const store = configureStore({
    reducer: {
        signup: signupSlice,
        addTransport: addTrnsportSlice,
    },
})

export default store;