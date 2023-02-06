import { createSlice } from "@reduxjs/toolkit";

const enableSubscribeButtonSlice = createSlice({
    name: 'enableSubscribeButton',
    initialState: {isButtonEnabled: false},
    reducers: {
        switchEnableButtonState(state, action){
            const shouldEnableButton = action.payload;
            state.isButtonEnabled = shouldEnableButton;
        }
    }
})

export const {switchEnableButtonState} = enableSubscribeButtonSlice.actions;
export default enableSubscribeButtonSlice.reducer;