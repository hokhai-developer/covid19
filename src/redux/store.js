import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './slices/countrySlice';

const store = configureStore({
    reducer: {
        country: countrySlice.reducer,
    },
});
export default store;
