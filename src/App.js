import * as React from 'react';
import './App.css';
import TodoAdd from './components/TodoAddComponent';
import Header from './components/HeaderComponent';
import TodoList from './components/TodoListComponent';
import TodoListContextProvider from './contexts/TodoListContext';
import { makeStyles } from '@material-ui/styles';

function App() {
  const name = "Andreea"

  const useStyles = makeStyles({
    container: `
    display: flex;
    justify-content: center;
    margin-top: 50px;
    `,
    
    app: `
    font-family: 'Open Sans Condensed', sans-serif;
    flex-direction: column;
    `,
  });

  const classes = useStyles()

  return (
    <div>
      <Header name={name} />
      <TodoListContextProvider className={classes.container}>
          <div className={classes.app}>
            <TodoAdd />
            <TodoList />
          </div>
      </TodoListContextProvider>
    </div>
  );
}

export default App;
