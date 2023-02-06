import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import HostsService from "../services/HostsService";

const initialState = {
    host: {},
    getHosts: null,
    success: false,
    error: false,
    message: null,
    loading: false
}

export const GetHosts = createAsyncThunk(
    "hosts/getAll",
    async (hosts, thunkAPI) => {
        const data = await HostsService.GetAllHosts();
        return data;
    }
)

export const createHosts = createAsyncThunk(
    "hosts/create",
    async (hosts, thunkAPI) => {
        const data = await HostsService.CreateHosts(hosts);
        return data;
    }
)


export const HostsSlice = createSlice(
    {
        name: "hosts",
        initialState,
        reducers: {
            resetMessage: (state) => {
                state.message = null
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(GetHosts.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(GetHosts.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.success = true;
                    state.getHosts = action.payload;
                })
                .addCase(GetHosts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.message = null;
                    state.getHosts = null;
                })
                .addCase(createHosts.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(createHosts.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.success = true;
                    state.getHosts = action.payload;
                })
                .addCase(createHosts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.message = null;
                    state.getHosts = null;
                })
        }
    }
)

export const {resetMessage} = HostsSlice.actions;

export default HostsSlice.reducer;