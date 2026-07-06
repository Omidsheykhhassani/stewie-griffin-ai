import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthView = "login" | "signup";

type AuthModalState = {
  isOpen: boolean;
  view: AuthView;
};

const initialState: AuthModalState = {
  isOpen: false,
  view: "login",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuth(state, action: PayloadAction<AuthView>) {
      state.isOpen = true;
      state.view = action.payload;
    },

    closeAuth(state) {
      state.isOpen = false;
    },

    setView(state, action: PayloadAction<AuthView>) {
      state.view = action.payload;
    },
  },
});

export const { openAuth, closeAuth, setView } = authSlice.actions;
export default authSlice.reducer;
