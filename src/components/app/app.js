import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component {

    state = {
        todoData: [
            { label: "Drink Coffee", important: false, id: 1 },
            { label: "Create Awesome Project", important: true, id: 2 },
            { label: "Have a lunch", important: false, id: 3 },
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((elem) => elem.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }

        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader todo={1} done={3} />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }

}
