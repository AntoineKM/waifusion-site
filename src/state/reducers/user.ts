import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Waifu } from "../../types/waifusion";
import { RootState } from "../index";

interface UserState {
  address: string;
  waifuIndexes: number[];
  loadingWafius: boolean;
  wetApproved: boolean;
  waifusApproved: boolean;
}

const initialState: UserState = {
  address: "",
  waifuIndexes: [],
  loadingWafius: false,
  wetApproved: false,
  waifusApproved: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setWaifuIndexes: (state, action: PayloadAction<number[]>) => {
      state.waifuIndexes = action.payload;
    },
    loadWaifus: (state) => {
      state.loadingWafius = true;
    },
    completeLoadWaifus: (state) => {
      state.loadingWafius = false;
    },
    setWetApproved: (state, action: PayloadAction<boolean>) => {
      state.wetApproved = action.payload;
    },
    setWaifusApproved: (state, action: PayloadAction<boolean>) => {
      state.waifusApproved = action.payload;
    },
  },
});

export const {
  setAddress,
  setWaifuIndexes,
  loadWaifus,
  completeLoadWaifus,
  setWetApproved,
  setWaifusApproved,
} = userSlice.actions;

export const selectLoadingWaifus = (state: RootState): boolean =>
  state.user.loadingWafius;
export const selectAddress = (state: RootState): string => state.user.address;
export const selectUserWaifuIds = (state: RootState): number[] =>
  state.user.waifuIndexes;
export const selectUsersWaifus = (state: RootState): Waifu[] => {
  return state.waifus.waifus.filter(
    (waifu: Waifu) => state.user.waifuIndexes.indexOf(waifu.id) > -1
  );
};
export const selectTotalAccumulated = (state: RootState): number => {
  return state.waifus.waifus
    .filter((waifu: Waifu) => state.user.waifuIndexes.indexOf(waifu.id) > -1)
    .reduce((a: number, b: Waifu) => a + (b.accumulatedWet || 0), 0);
};
export const selectWetApproved = (state: RootState): boolean =>
  state.user.wetApproved;
export const selectWaifusApproved = (state: RootState): boolean =>
  state.user.waifusApproved;

export default userSlice.reducer;
