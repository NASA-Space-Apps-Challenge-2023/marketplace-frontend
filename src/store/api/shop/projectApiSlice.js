// projectApiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "";
const PROJECTS_API_URL = `${API_BASE_URL}/projects`;

// Async thunk to fetch all projects
export const fetchAllProjects = createAsyncThunk("project/fetchAllProjects", async () => {
    try {
      const response = await axios.get(`${PROJECTS_API_URL}`);
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch projects");
    }
  });

// Async thunk to fetch project data
export const fetchProjectData = createAsyncThunk("project/fetchProjectData", async (projectId) => {
  try {
    const response = await axios.get(`${PROJECTS_API_URL}/${projectId}`);
    return response.data;
  } catch (error) {
    throw Error("Failed to fetch project data");
  }
});

// Async thunk to update project data
export const updateProjectData = createAsyncThunk("project/updateProjectData", async (projectData) => {
  try {
    const response = await axios.put(`${PROJECTS_API_URL}/${projectData._id}`, projectData);
    return response.data;
  } catch (error) {
    throw Error("Failed to update project data");
  }
});

const projectApiSlice = createSlice({
  name: "projectApi",
  initialState: {
    projects: [],
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    updateAllProjects: (state, action) => {
        state.projects = action.payload;
    },
    updateProjectStatus: (state, action) => {
      const { status } = action.payload;
      state.data.project_status = status;
    },
    updateProjectGoals: (state, action) => {
      const { goals } = action.payload;
      state.data.project_goals = goals;
    },
    addCollaborator: (state, action) => {
      const { collaboratorId } = action.payload;
      state.data.collaborators.push(collaboratorId);
    },
    removeCollaborator: (state, action) => {
      const { collaboratorId } = action.payload;
      state.data.collaborators = state.data.collaborators.filter((id) => id !== collaboratorId);
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchAllProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;  // Update projects array
      })
      .addCase(fetchAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProjectData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjectData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjectData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProjectData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProjectData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateProjectData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  updateProjectStatus,
  updateProjectGoals,
  addCollaborator,
  removeCollaborator,
} = projectApiSlice.actions;
export default projectApiSlice.reducer;
