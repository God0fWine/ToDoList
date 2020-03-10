import React, { Component } from "react";

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';


export default class App extends Component {

    newIdx = 100;

    state = {
        todoData: [
            this.createItem("Drink Coffee"),
            this.createItem("Create Awesome Project"),
            this.createItem("Have a lunch")
        ],
        filter: ''
    }

    createItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.newIdx++
        }
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

    addItem = (text) => {

        const newItem = this.createItem(text);


        this.setState(({ todoData }) => {

            const newTodoData = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newTodoData
            }
        });

    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((elem) => elem.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }

        return [...arr.slice(0, idx),
            newItem,
        ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "done")
            }
        });

    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important")
            }

        });
    };

    searchFunc(tasks, label) {

        if (label === '') {
            return tasks;
        }

        return tasks.filter((task) => {
            return task.label.toLowerCase().indexOf(label.toLowerCase()) > -1;
        });
    }

    onChangeField = (label) => {
        this.setState({
            filter: label
        });
    } 

    render() {
        const { todoData, filter } = this.state;

        const doneCount = todoData.filter((el) => el.done).length;
        const restCount = todoData.length - doneCount;

        const visibleTasks = this.searchFunc(todoData, filter);

        return (
            <div className="todo-app">
                <AppHeader todo={restCount} done={doneCount} />
                <div className="search-panel d-flex">
                    <SearchPanel onChange={this.onChangeField}/>
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={visibleTasks}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm
                    onAdded={this.addItem}
                />
            </div>
        );
    }

}
