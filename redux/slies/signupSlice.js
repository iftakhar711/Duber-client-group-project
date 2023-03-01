import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        FirstName: (state, action) => {
            state.firstName = action.payload;
        },
        LastName: (state, action) => {
            state.lastName = action.payload
        },
        Email: (state, action) => {
            state.email = action.payload
        },
        Password: (state, action) => {
            state.password = action.payload;
        },
        Role: (state, action) => {
            state.role = action.payload
        }
    },
})

export const { FirstName, LastName, Email, Password, Role } = signupSlice.actions;

export default signupSlice.reducer;