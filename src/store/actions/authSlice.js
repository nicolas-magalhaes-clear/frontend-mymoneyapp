

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';




const authSlice = createSlice({
    name: 'authSlice',
    initialState: { data: null },
    reducers: {
        // Reducer para incrementar o contador
        setUserInfo: (state, action) => {
            state.data = action.payload
            console.log('state data:', state.data)
        },
        // Reducer para decrementar o contador
        getUserInfo: (state) => {
            
        },
    },
    
});

export const { setUserInfo, getUserInfo } = authSlice.actions;

export default authSlice.reducer;
