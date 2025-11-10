import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, fetchTask } from "./taskSlice";

export const Task = () => {
    const dispatch = useDispatch();
    const { task, loading, error } = useSelector((state) => state.tasks);

    const handleToggle = (id) => {
        // console.log(id)
        dispatch(toggleTask(id));
    };

    useEffect(() => {
        dispatch(fetchTask());
    }, []);

    return (
        <div className="container my-5">
            {loading && <p>Loading ...</p>}
            {error && <p>{error}</p>}
            <h1 className="mb-4">My Task List</h1>

            {task.map((curr, index) => (
                <div key={index} className="card mb-4 shadow-sm">
                    <div className="card-header bg-primary text-white">
                        Date: {curr.date}
                    </div>

                    <ul className="list-group list-group-flush">
                        {curr.tasks.map((t) => (
                            <li
                                key={t.taskId}
                                className={`list-group-item d-flex justify-content-between align-items-center ${t.taskStatus === "Completed" ? "list-group-item-success" : ""
                                    }`}
                            >
                                <span>{t.task}</span>
                                <button
                                    className={`btn btn-sm ${t.taskStatus === "Completed"
                                        ? "btn-success"
                                        : "btn-warning text-dark"
                                        }`}
                                    onClick={() => handleToggle(t.taskId)}
                                >
                                    {t.taskStatus}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
