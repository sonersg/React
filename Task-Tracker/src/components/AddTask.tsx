import { useState } from "react";

type Task = {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
};

type AddTaskProps = {
    onAddTask: (task: Task) => void;
};
function AddTask({ onAddTask }: AddTaskProps) {
    const [text, setText] = useState("");
    const [day, setday] = useState("");
    const [reminder, setreminder] = useState(false);

    // Handle Submit
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (text) {
            onAddTask({ text, day, reminder });

            setText("");
            setday("");
            setreminder(false);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input
                    type="text"
                    placeholder="Add Day & Time"
                    value={day}
                    onChange={e => setday(e.target.value)}
                />
            </div>

            <div className="form-checkbox">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    // value={reminder}
                    onChange={e => setreminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn" />
        </form>
    );
}

export default AddTask;
