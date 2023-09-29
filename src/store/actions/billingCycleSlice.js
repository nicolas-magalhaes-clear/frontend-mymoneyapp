// billingCycleSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define uma função assíncrona que simula uma consulta à API.
const fetchAllData = async () => {
    const response = await fetch(`http://localhost:3003/api`);
    if (!response.ok) {
        throw new Error('Não foi possível buscar os dados do usuário.');
    }
    const data = await response.json();
    
    return data;
};

// Crie um thunk assíncrono para buscar os dados do usuário.
export const fetchData = createAsyncThunk('user/fetchData', async () => {
    const user = await fetchAllData();
    return user;
});

const billingCycleSlice = createSlice({
    name: 'billingCycle',
    initialState: { data: null, loading: 'idle', error: null, credits: 0 },
    reducers: {
        // Reducer para incrementar o contador
        loadCredits: (state) => {
           
        },
        // Reducer para decrementar o contador
        loadDebts: (state) => {

        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = 'complete';
                
                state.data = action.payload;
                
                state.error = null;
                // Despache a ação loadCredits() aqui após o sucesso da solicitação da API
                loadCredits()
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = 'idle';
                state.data = null;
                state.error = action.error.message;
            });
    },
});

export const { loadCredits, loadDebts } = billingCycleSlice.actions;

export default billingCycleSlice.reducer;
