import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import mock from "../../../@fake-db/mock";

mock.restore()

let initialState = []

await axios.get('https://dietservice.bitjoins.pe/api/evolucion/379')
.then(res => {
    initialState = res.data.data
})

export const evolutionSlice = createSlice({
    name: 'evolution',
    initialState,
    reducers: {
        setEvolution: (state, action) => {
            const evolucion = action.payload
            return evolucion
        }
    }
})

export const getEvolution = () => async (dispatch) => {
    return await axios.get('https://dietservice.bitjoins.pe/api/evolucion/379')
    .then(res => dispatch(setEvolution(res.data.data)))
}

export const {setEvolution} = evolutionSlice.actions
export default evolutionSlice.reducer