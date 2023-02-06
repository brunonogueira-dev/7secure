import {configureStore} from "@reduxjs/toolkit";
import hostsReducer from "./slices/HostsSlice";
import hostReducer from "./slices/HostSlice";

export const Store = configureStore({
    reducer:{
        hosts: hostsReducer,
        host: hostReducer
    }
})