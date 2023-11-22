import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  waterCans: [],
  recordPayments: { payment: 20, date: new Date() },
  transactions: [],
  balance: 0,
  settings: { canCapacity: 0, pricePerCan: 0, familyStrength: 0 },
  intialvalue: { capacity: 0, price: 1, date: new Date() },
  // resetData:{watercans,capacity,price,date},
};

const watercancount = createSlice({
  name: "water",
  initialState,
  reducers: {
    addWaterCan: (state, action) => {
      const { capacity, price, date } = action.payload;
      state.waterCans = [...state.waterCans, { capacity, price, date }];
      state.balance -= price;
    },

    recordPayment: (state, action) => {
      const { date, payment } = action.payload;

      state.transactions = [...state.transactions, { date, payment }];

      state.balance += payment;
    },

    updateSettings: (state, action) => {
      const { pricePerCan, canCapacity, familyStrength } = action.payload;
      state.settings.canCapacity = canCapacity;
      state.settings.pricePerCan = pricePerCan;
      state.settings.familyStrength = familyStrength;
      console.log({ state });
    },

    edit: (state, action) => {
      const { capacity, price } = action.payload;
      state.intialvalue.capacity = capacity;
      state.intialvalue.price = price;
    },
    // advanced:(state,action)=>{
      // const {watercans,capacity,price,date} = action.payload;
    // }
  },
});

// Action creators are generated for each case reducer function
export const { addWaterCan, recordPayment, updateSettings, edit } =
  watercancount.actions;

export default watercancount.reducer;
