import { createSlice } from "@reduxjs/toolkit";

const notificationTextSlice = createSlice({
    name: 'notificationText',
    initialState: {notificationText: ''},
    reducers: {
        changeNotificationText(state, action){
            const newNotificationText = action.payload;
            state.notificationText = newNotificationText;
        }
    }
})

export const {changeNotificationText} = notificationTextSlice.actions;
export default notificationTextSlice.reducer;