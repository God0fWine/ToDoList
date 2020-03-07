import React from 'react';

import TodoListItem from './todo-list-tem'

import './todo-list.css'
// const items = [
//     "Learn React",
//     "Create Awesome Project",
//     'jeka',
//     'volodya',
//     'gavrik',
// ];

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps} />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>

        // <Consumer>
        //     {({search}) => {
        //         const itemList = search
        //          ? items.filter(name => name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1)
        //           : items;
        //         return (<ul>
        //             {itemList.map(name => (<li key={name}>
        //                 {name}
        //             </li>))}
        //         </ul>)
        //     }}
        // </Consumer>
    );
}

export default TodoList;