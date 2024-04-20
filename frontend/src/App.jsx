import { useState } from 'react';

import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          {
            title: 'Go gym',
            description: 'Go to the gym from 9PM ot 10PM'
          }
        ]}></Todos>
    </div>
  );
}

export default App;
