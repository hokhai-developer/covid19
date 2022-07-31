import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        Country: 'Viet Nam',
        ISO2: 'VN',
        Slug: 'vietnam',
    },
    reducers: {
        update: (state, actions) => {
            if (state.ISO2 !== actions.payload.ISO2) {
                state = actions.payload;
                return state;
            }
        },
    },
});
export default countrySlice;
