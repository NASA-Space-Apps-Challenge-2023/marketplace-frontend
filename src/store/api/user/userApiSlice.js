// userApiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "";
const USERS_API_URL = `${API_BASE_URL}/users`;

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk("user/fetchUserData", async (userId) => {
  try {
    const response = await axios.get(`${USERS_API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch user data");
  }
});

// Async thunk to update user data
export const updateUserData = createAsyncThunk("user/updateUserData", async (userData) => {
  try {
    const response = await axios.put(`${USERS_API_URL}/${userData._id}`, userData);
    return response.data;
  } catch (error) {
    throw Error("Failed to update user data");
  }
});

const userApiSlice = createSlice({
  name: "userApi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    changePassword: (state, action) => {
      const { newPassword } = action.payload;
      state.data.password = newPassword;
    },
    addSkill: (state, action) => {
      const { skill } = action.payload;
      state.data.skills.push(skill);
    },
    addProjectCreated: (state, action) => {
      const { project } = action.payload;
      state.data.projects_created.push(project);
    },
    addProjectParticipated: (state, action) => {
      const { project } = action.payload;
      state.data.projects_participated.push(project);
    },
    updateInterests: (state, action) => {
      const { interests } = action.payload;
      state.data.interests = interests;
    },
    updateAvailability: (state, action) => {
      const { availability } = action.payload;
      state.data.availability = availability;
    },
    updateCommunication: (state, action) => {
      const { communication } = action.payload;
      state.data.communications.push(communication);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  changePassword,
  addSkill,
  addProjectCreated,
  addProjectParticipated,
  updateInterests,
  updateAvailability,
  updateCommunication,
} = userApiSlice.actions;
export default userApiSlice.reducer;
