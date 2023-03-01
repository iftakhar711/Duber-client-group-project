import { configureStore } from '@reduxjs/toolkit'
import signupSlice from '../slies/signupSlice';

const store = configureStore({
    reducer: {
        signup: signupSlice,
    },
})

export default store;