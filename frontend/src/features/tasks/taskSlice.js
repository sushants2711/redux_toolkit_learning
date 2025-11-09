import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        task: [
            {
                date: "2025-11-27",
                task: [
                    {
                        id: 1,
                        name: "Get Groceries from the market",
                        status: "Pending"
                    },
                    {
                        id: 2,
                        name: "Go to Gym",
                        status: "Completed"
                    },
                    {
                        id: 3,
                        name: "Water the plants",
                        status: "Completed"
                    }
                ],
            },
            {
                date: "28-11-2024",
                task: [
                    {
                        id: 4,
                        name: "Gp To The Park",
                        status: "Completed"
                    },
                    {
                        id: 5,
                        name: "Get my room cleaned",
                        status: "Completed"
                    },
                    {
                        id: 6,
                        name: "Bring your Laptop",
                        status: "Completed"
                    }
                ],
            }
        ]
    },
    reducers: {
        toggleTask: (state, action) => {
            state.task.forEach((curr) => {
                const foundTask = curr.task.find(t => t.id === action.payload);
                if (foundTask) {
                    foundTask.status = foundTask.status === "Completed" ? "Pending" : "Completed";
                }
            });
        }
    }
});

export const { toggleTask } = taskSlice.actions;
export default taskSlice.reducer;