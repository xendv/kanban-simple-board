import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/Task.css';
import '../css/UIElements.css';

function TasksBoard({index, name, tasksInBoard, root}) {
    const [tasks, setTasks] = React.useState(tasksInBoard);

    function addTask() {
        const nextIdx = tasks.length === 0 ? 0 : tasks.at(-1).index + 1;
        setTasks([...tasks, {index: nextIdx, text: ""}]);
        return nextIdx;
    }

    const removeTask = taskIndex => {
        setTasks(tasks.filter(task => task.index !== taskIndex));
    }

    return <div className="tasks-board" id={index}>
        <TasksBoardHeader name={name}/>
        {tasks.map((task) => (
            <Task
                key={task.index}
                index={task.index}
                addTask={addTask}
                id={task.index}
                text={task.text}
                remove={removeTask}
                parent={index}
            />
        ))}
        <button className="add-button" id={index} onClick={addTask}>+</button>
    </div>;
}

function TasksBoardHeader({name}) {
    return (
        <div className="tasks-header">
            <h3>{name}</h3>
        </div>
    );
}

function Task({index, text, remove, addTask, parent}) {
    const [taskText, setText] = React.useState(text);

    function handleKeyDown(event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            const nextIdx = addTask();
            const area = document.querySelector("textarea.taskText [id='" + index + "-" + nextIdx + "']");
            area.focus();
        }
        const target = event.target;
        target.style.height = "auto";
        target.style.height = target.scrollHeight + 'px';
        setText(target.text);
    }

    return (
        <div className="task" key={index}>
            <textarea className="taskText" defaultValue={text} id={parent + '-' + index} spellCheck={false}
                      onKeyDown={handleKeyDown}/>
            <button className="remove-button" onClick={() => remove(index)} id={index}>X</button>
        </div>
    );
}

/*class TasksBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd(e) {
        this.setState(state => ({
            tasks: state.tasks.add(Task())
        }));
    }

    handleDelete(e) {
        this.setState(state => ({
            tasks: state.tasks.splice(e.target.id, 1)
        }));
    }

    render() {
        return <tasks-board>
            {this.state.header}
            {this.state.tasks}
            <button class="add-button" onClick={this.handleAdd}>Add</button>
        </tasks-board>;
    }
}*/
/*class TaskBoardHeader extends React.Component {
    render() {
        return (
            <tasks-header>
                <h3>{this.props.name}</h3>
            </tasks-header>
        );
    }
}*/

//root.render(<TasksBoard name="Taylor" />);

export default TasksBoard;