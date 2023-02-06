import {configureStore} from "@reduxjs/toolkit";
import hostsReducer from "./slices/HostsSlice";

export const Store = configureStore({
    reducer:{
        hosts: hostsReducer,
    }
})