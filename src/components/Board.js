import React from 'react';
import '../css/Task.css';
import TasksBoard from './TasksBoard.js';
import '../css/UIElements.css';

function Board({root}) {
    const [taskBoards] = React.useState([
            {name: "Backlog",
                tasks: [{index: 0, text: "Fix minor bug"}, {index: 1, text: "Add dark theme"}, {
                    index: 2,
                    text: "Delete deprecated APIs"
                }]
            },
            {name: "ToDo", tasks: [{index: 0, text: "Make controller for API"}]},
            {name: "In progress", tasks: []},
            {name: "Completed", tasks: [{index: 0, text: "Create project structure"}]}
        ]);

    return <div className="board">
        {taskBoards.map((board, index) => (
            <TasksBoard
                key={index}
                index={index}
                name={board.name}
                tasksInBoard={board.tasks}
                root={root}
            />
        ))}
    </div>
}

/*

class Board extends React.Component {
    render() {
        return <board>{this.props.tasksBoards}</board>;
    }
}
*/
export default Board;