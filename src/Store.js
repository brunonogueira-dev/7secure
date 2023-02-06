import {configureStore} from "@reduxjs/toolkit";
import hostsReducer from "./slices/HostsSlice";
import hostReducer from "./slices/HostSlice";
import packagesReducer from "./slices/PackagesSlice";

export const Store = configureStore({
    reducer:{
        hosts: hostsReducer,
        host: hostReducer,
        packages: packagesReducer
    }
})