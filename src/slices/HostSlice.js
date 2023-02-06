import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import HostService from "../services/HostService";
import {createHosts, GetHosts} from "./HostsSlice";

const initialState = {
    host: {},
    getHost: null,
    success: false,
    error: false,
    message: null,
    loading: false
}

export const getByIdHost = createAsyncThunk(
    "host/getById",
    async (host, thunkAPI) => {
        const data = await HostService.getByIdHost(host);
        return data;
    }
)

export const updateHost = createAsyncThunk(
    "host/update",
    async (host, thunkAPI) => {
        const data = await HostService.updateHost(host);
        return data;
    }
)

export const patchHost = createAsyncThunk(
    "host/patch",
    async (host, thunkAPI) => {
        const data = await HostService.patchHost(host);
        return data;
    }
)
export const deleteHost = createAsyncThunk(
    "host/delete",
    async (host, thunkAPI) => {
        const data = await HostService.deletehHost(host);
        return data;
    }
)

export const HostSlice = createSlice({
    name: "host",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getByIdHost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getByIdHost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.getHost = action.payload;
            })
            .addCase(getByIdHost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = null;
                state.getHost = null;
            })
            .addCase(updateHost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(updateHost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.host = action.payload;
            })
            .addCase(updateHost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = null;
                state.host = null;
            })
            .addCase(patchHost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(patchHost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.host = action.payload;
            })
            .addCase(patchHost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = null;
                state.host = null;
            })
            .addCase(deleteHost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(deleteHost.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
                state.host = action.payload;
            })
            .addCase(deleteHost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = null;
                state.host = null;
            })
    }
})

export const {resetMessage} = HostSlice.actions;

export default HostSlice.reducer;