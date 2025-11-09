import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleTask } from "./taskSlice";

export const Task = () => {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.task);

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4">My Task List</h1>
            {tasks.map((curr, index) => (
                <div key={index} className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                        Date: {curr.date}
                    </div>

                    <ul className="list-group list-group-flush">
                        {curr.task.map((curr) => (
                            <li
                                key={curr.id}
                                className={`list-group-item d-flex justify-content-between align-items-center ${curr.status === "Completed" ? "list-group-item-success" : ""
                                    }`}
                            >
                                <span>{curr.name}</span>
                                <span
                                    className={`badge rounded-pill ${curr.status === "Completed"
                                        ? "bg-success"
                                        : "bg-warning text-dark"
                                        }`}
                                >
                                    <button className="btn btn-sm" onClick={() => handleToggle(curr.id)}>{curr.status}</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
