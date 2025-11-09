import React from "react";
import { useSelector } from "react-redux";

export const Task = () => {
    const tasks = useSelector((state) => state.tasks.task);

    return (
        <div className="container my-5">
            <h1 className="mb-4">My Task List</h1>
            {tasks.map((curr, index) => (
                <div key={index} className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                        Date: {curr.date.toLocaleDateString()}
                    </div>

                    <ul className="list-group list-group-flush">
                        {curr.task.map((curr, i) => (
                            <li
                                key={i}
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
                                    {curr.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
