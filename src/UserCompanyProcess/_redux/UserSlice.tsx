import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userOfCompany, userOfCompanyData, addUserOfCompanyData } from "../UserInterface/UserInterface"

const initialState: userOfCompany = {
    userofCompanyEntities: [],
    totalRecordsForUserOfCompany: 0,
    totalPagesForUserOfCompany: 0,
    singleUserOfCompany: [],
};

export const userOfCompanySlice = createSlice({
    name: "userOfCompany",
    initialState: initialState,
    reducers: {
        fetchUserOfCompanyDataSlice: (state, action: PayloadAction<Array<userOfCompanyData>>) => {
            state.userofCompanyEntities = action.payload;
        },
        fetchOUserOfCompanyDataSlice: (state, action: PayloadAction<Array<userOfCompanyData>>) => {
            state.userofCompanyEntities = action.payload;
        },
        fetchUserOfCompanyPagesSlice: (state, action: PayloadAction<number>) => {
            state.totalPagesForUserOfCompany = action.payload;
        },
        fetchSingleUserOfCompanySlice: (state, action: PayloadAction<Array<userOfCompanyData>>) => {
            state.singleUserOfCompany = action.payload;
        },
    },
})