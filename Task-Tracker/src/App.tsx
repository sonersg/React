import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

type Task = {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
};

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        async function getTasks() {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

        getTasks();
    }, []);

    // Fetch Tasks
    const fetchTasks = async () => {
        const response = await fetch("http://localhost:5000/tasks");
        const data = await response.json();
        return data;
    };

    // Fetch Task
    const fetchTask = async (id?: number) => {
        const response = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await response.json();
        return data;
    };

    // Delete Task
    async function handleDelete(id?: number) {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });

        setTasks(tasks.filter(task => task.id !== id));
    }

    // Handle Double Click
    async function handleDoubleClick(id?: number) {
        const fetchedTask: Task = await fetchTask(id);
        const updatedTask = { ...fetchedTask, reminder: !fetchedTask.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(updatedTask),
        });

        const data: Task = await res.json();

        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
    }

    // Add Task
    async function onAddTask(task: Task) {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });

        const data: Task = await res.json();

        setTasks([...tasks, data]);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTask = { id, ...task };
        // setTasks([...tasks, newTask]);
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Header
                    toggle={toggle}
                    text="Task Tracker"
                    handleClick={() => setToggle(prev => !prev)}
                />

                {toggle && <AddTask onAddTask={onAddTask} />}

                {tasks.length > 0 ? (
                    <Tasks
                        tasks={tasks}
                        setTasks={setTasks}
                        handleDelete={handleDelete}
                        handleDoubleClick={handleDoubleClick}
                    />
                ) : (
                    "No Tasks to Show"
                )}

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
