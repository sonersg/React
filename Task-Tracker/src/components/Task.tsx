import { FaTimes } from "react-icons/fa";

type TaskProps = {
    task: {
        id?: number;
        text: string;
        day: string;
        reminder: boolean;
    };

    setTasks: React.Dispatch<
        React.SetStateAction<
            {
                id?: number;
                text: string;
                day: string;
                reminder: boolean;
            }[]
        >
    >;

    handleDelete: (id?: number) => void;

    handleDoubleClick: (id?: number) => void;
};

function Task({ task, handleDelete, handleDoubleClick }: TaskProps) {
    return (
        <div
            className={`task-container ${task.reminder ? "reminder" : ""}`}
            onDoubleClick={() => handleDoubleClick(task.id)}
            onTouchMoveCapture={() => handleDoubleClick(task.id)}
        >
            <div className="task-body">
                <h3>{task.text}</h3>
                <p className={`${task.reminder ? "day-reminder" : ""}`}>
                    {task.day}
                </p>
            </div>

            <div className="task-icon">
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(task.id)}
                />
            </div>
        </div>
    );
}

export default Task;
