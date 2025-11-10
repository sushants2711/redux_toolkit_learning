import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTask = createAsyncThunk("/users/task", async () => {
    const response = await axios.get("https://task-list-hw-server-student-neog-ca.replit.app/tasks");
    console.log(response);
    return response.data;
})

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        task: [],
        loading: false,
        error: null
    },
    reducers: {
        toggleTask: (state, action) => {
            state.task.forEach((curr) => {
                if (curr.tasks) {
                    const foundTask = curr.tasks.find(
                        (t) => t.taskId === action.payload
                    );
                    if (foundTask) {
                        foundTask.taskStatus =
                            foundTask.taskStatus === "Completed" ? "Pending" : "Completed";
                    }
                }
            });
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTask.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.loading = false,
                state.task = action.payload.tasks
        });
        builder.addCase(fetchTask.rejected, (state, action) => {
            state.loading = false,
                state.task = [],
                state.error = action.payload.message
        })
    }
});

export const { toggleTask } = taskSlice.actions;
export default taskSlice.reducer;