import './App.css';
import TodoAdd from './components/TodoAddComponent';
import Header from './components/HeaderComponent';
import TodoList from './components/TodoListComponent';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {

  const name = "Andreea"

  return (

    <div className="App">
      <TodoListContextProvider>
        <Header name={name} />
        <TodoAdd />
        <TodoList />
      </TodoListContextProvider>
    </div>
  );
}

export default App;
