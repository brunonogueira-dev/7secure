import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import PackagesService from "../services/PackagesService";

const initialState = {
    Package: {},
    getPackages: null,
    success: false,
    error: false,
    message: null,
    loading: false
}

export const GetPackages = createAsyncThunk(
    "packages/getAll",
    async (Packages, thunkAPI) => {
        const data = await PackagesService.GetAllPackages();
        return data;
    }
)

export const createPackages = createAsyncThunk(
    "packages/create",
    async (Packages, thunkAPI) => {
        const data = await PackagesService.CreatePackages(Packages);
        return data;
    }
)


export const PackagesSlice = createSlice(
    {
        name: "packages",
        initialState,
        reducers: {
            resetMessage: (state) => {
                state.message = null
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(GetPackages.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(GetPackages.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.success = true;
                    state.getPackages = action.payload;
                })
                .addCase(GetPackages.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.message = null;
                    state.getPackages = null;
                })
                .addCase(createPackages.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(createPackages.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.success = true;
                    state.Package = action.payload;
                })
                .addCase(createPackages.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.message = null;
                    state.Package = null;
                })
        }
    }
)

export const {resetMessage} = PackagesSlice.actions;

export default PackagesSlice.reducer;