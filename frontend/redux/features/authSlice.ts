import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthView = "login" | "signup";

type AuthState = {
  view: AuthView;
};

const initialState: AuthState = {
  view: "login",
};

// This creates the authentication slice (context) for our app
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setView(state, action: PayloadAction<AuthView>) {
      state.view = action.payload;
    },
  },
});

export const { setView } = authSlice.actions;
export default authSlice.reducer;
