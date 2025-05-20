import { configureStore } from "@reduxjs/toolkit";
import xeReducer from "./reducer";

export default configureStore({
    reducer: {
        listXeInStore: xeReducer,
    },
});