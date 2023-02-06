import { createSlice } from "@reduxjs/toolkit";

const userEmailAddressSlice = createSlice({
    name: "userEmailAddress",
    initialState: {userEmailAddress: ''},
    reducers: {
        changeUserEmailAddress(state, action){
            const userEmail = action.payload;
            state.userEmailAddress = userEmail;
        }
    }
})

export const {changeUserEmailAddress} = userEmailAddressSlice.actions;
export default userEmailAddressSlice.reducer;