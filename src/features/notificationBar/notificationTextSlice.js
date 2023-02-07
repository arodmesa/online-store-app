import { createSlice } from "@reduxjs/toolkit";

const notificationTextSlice = createSlice({
    name: 'notificationText',
    initialState: {notificationText: ''},
    reducers: {
        changeNotificationText(state, action){
            const {newNotificationText, notificationDisplayTime} = action.payload;
            state.notificationText = newNotificationText;
            setTimeout(()=>state.notificationText = '', notificationDisplayTime);
        }
    }
})

export const {changeNotificationText} = notificationTextSlice.actions;
export default notificationTextSlice.reducer;