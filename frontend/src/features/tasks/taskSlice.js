import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        task: [
            {
                date: new Date(),
                task: [
                    {
                        name: "Get Groceries from the market",
                        status: "Pending"
                    },
                    {
                        name: "Go to Gym",
                        status: "Completed"
                    },
                    {
                        name: "Water the plants",
                        status: "Completed"
                    }
                ],
            },
            {
                date: new Date(),
                task: [
                    {
                        name: "Gp To The Park",
                        status: "Completed"
                    },
                    {
                        name: "Get my room cleaned",
                        status: "Completed"
                    },
                    {
                        name: "Bring your Laptop",
                        status: "Completed"
                    }
                ],
            }
        ]
    },
    reducers: {}
});

export default taskSlice.reducer;