import { configureStore } from "@reduxjs/toolkit";
import vinSlice from './slices/vinSlice/vinSlice'
import reportOptionSlice from './slices/reportOptionSice/reportOption'

export const store = configureStore({
    reducer: {
        vin: vinSlice,
        reportOption: reportOptionSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch