import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  type: 'login' | 'register' | null 
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<'login' | 'register'>) => {
      state.isOpen = true
      state.type = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
      state.type = null
    },
  },
})

export const { openModal, closeModal } = authModalSlice.actions
export default authModalSlice.reducer
