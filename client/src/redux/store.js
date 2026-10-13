import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./apis/adminApi";
import adminReducer from "./slices/adminSlice";


const reduxStore = configureStore({
  reducer: {
    
    [adminApi.reducerPath]: adminApi.reducer,
    
    admin: adminReducer,
  },

  middleware: (def) =>
    def().concat(
      adminApi.middleware,
      

    ),

});

export default reduxStore;
