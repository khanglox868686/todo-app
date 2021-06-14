
import'./App.css';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button'; 
import { useCallback, useEffect, useState } from 'react';
import Todolist from './components/todolist';
import { v4 } from 'uuid';

const TODO_APP_STORAGE = "TODO_APP";

function App() {
  const [todolist,settodolist] = useState([]);
  const [textInput,setTextinput] = useState(" ");

  useEffect(() => {
    const storagedTodolist = localStorage.getItem(TODO_APP_STORAGE);
    if(storagedTodolist) {
        settodolist(JSON.parse(storagedTodolist))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE,JSON.stringify(todolist))
  },[todolist]);

  const onTextinputchange = (e) => {
     setTextinput(e.target.value);
  }

  const onAddbtnclick = (e) => {
    settodolist([...todolist,{id: v4(),name:textInput}]);
    setTextinput('');
  }

  var findID = (id,states) => {
    let result = -1;
    states.forEach((state,index) => {
      if(state.id === id) {
        result = index;
      }
    });
    return result;
  }

  const delTodo = (id) => {
    const index = findID(id,todolist);
    todolist.splice(index,1);
    settodolist(todolist);
    console.log("xóa",todolist);
  }

  return (
    <>
      <div className="container">
        <p>Danh sách việc cần làm</p>
        <Textfield name="add-todo" placeholder='Thêm việc cần làm . . .' value={textInput} onChange={onTextinputchange} elemAfterInput={<Button isDisabled={!textInput? true : false} onClick={onAddbtnclick}>Thêm</Button>} css={{ padding:"2px 4px 2px 4px"}}></Textfield>
        <Todolist todolist={todolist} delTodo={delTodo}></Todolist>
      </div>
    </>
  );
}

export default App;
