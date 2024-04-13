import Task from "./Task";

type TasksProps = {
    tasks: {
        id?: number;
        text: string;
        day: string;
        reminder: boolean;
    }[];
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

function Tasks({
    tasks,
    setTasks,
    handleDelete,
    handleDoubleClick,
}: TasksProps) {
    return (
        <div className="tasks-container">
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        setTasks={setTasks}
                        handleDelete={handleDelete}
                        handleDoubleClick={handleDoubleClick}
                    />
                );
            })}
        </div>
    );
}

export default Tasks;
