const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    vehicleName: '',
    img: '',
    transport: '',
    seatPlan: '',
    from: '',
    destination: '',
    cost: '',
    numberPlate: ''
}

const addTransport = createSlice({
    name: 'addTransport',
    initialState,
    reducers: {
        vehicleName: (state, action) => {
            state.vehicleName = action.payload;
        },
        transportImg: (state, action) => {
            state.img = action.payload
        },
        transport: (state, action) => {
            state.transport = action.payload
        },
        seatPlan: (state, action) => {
            state.seatPlan = action.payload
        },
        from: (state, action) => {
            state.from = action.payload
        },
        destination: (state, action) => {
            state.destination = action.payload
        },
        cost: (state, action) => {
            state.cost = action.payload
        },
        numberPlate: (state, action) => {
            state.numberPlate = action.payload
        }
    }
})

export const { vehicleName, transportImg, transport, seatPlan, from, destination, cost, numberPlate } = addTransport.actions;

export default addTransport.reducer;