import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { role: string } | null;
}

const initialState: AuthState = {
  user: null, // Initially no user is logged in
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;