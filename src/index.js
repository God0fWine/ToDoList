import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/App-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './/components/item-status-filter';

import './index.css';

// const CtxSearch = React.createContext({
//     search: '',
//     searchHandler: () => {},
// });
// const {Provider, Consumer} = CtxSearch;

// class App extends React.Component {
//     state = {
//         search: '',
//     };

//     searchHandler = (search) => {
//         this.setState({search});
//     };

// render () {
const App = () => {

    const todoData = [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Create Awesome Project", important: true, id: 2 },
        { label: "Have a lunch", important: false, id: 3 },
    ];
    return (
        <div className="todo-app">
            {/* <Provider value={{...this.state, searchHandler: this.searchHandler}}> */}
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
            {/* </Provider> */}
        </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));