import { configureStore } from "@reduxjs/toolkit";
import vinSlice from './slices/vinSlice/vinSlice'
import reportOptionSlice from './slices/reportOptionSice/reportOption'
import carInfoSlice from './slices/carInfoSlice/carInfoSlice'

export const store = configureStore({
    reducer: {
        vin: vinSlice,
        reportOption: reportOptionSlice,
        carInfo: carInfoSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch