import { Dir } from '@/types/config.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ConfigState = {
  dir: Dir;
  isExpanded: boolean;
  isToggled: boolean;
};

const initialState: ConfigState = {
  dir: 'ltr',
  isExpanded: true,
  isToggled: false,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setDir(state, action: PayloadAction<Dir>) {
      state.dir = action.payload;
    },
    setIsExpanded(state, action: PayloadAction<boolean>) {
      state.isExpanded = action.payload;
    },
    setIsToggled(state, action: PayloadAction<boolean>) {
      state.isToggled = action.payload;
    },
  },
});

export const { setDir, setIsExpanded, setIsToggled } = configSlice.actions;
export const selectDir = (state: { config: ConfigState }) => state.config.dir;
export const selectIsExpanded = (state: { config: ConfigState }) =>
  state.config.isExpanded;
export const selectIsToggled = (state: { config: ConfigState }) =>
  state.config.isToggled;
export default configSlice.reducer;
