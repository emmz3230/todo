import React from "react";
import "./App.css";
// write some css code to do the styling
import { Button, Card, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// here define todo componet 
// and return some jsx

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>?</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>?</Button>
      </div>
    </div>
  );
}

// here we define gthe formtodo
//  and return a form which accepts
//  a tgodo and has a submit button
function FormTodo ({addTodo}) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value)return;
    addTodo(value);
    setValue("");

  };
  return (
    <Form onSubmit = {handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control 
        type="text"
        className="input" 
        value ={value}
        onChange = {e =>setValue(e.target.value)} 
        placholder ="Add new todo"/>
      </Form.Group>
      <button variant ="primary mb-3" type ="submit">
        submit
      </button>
    </Form>
  );
}
// here i define a todo list using javascript that contain all th todo and carry the status of each todo
function App() {
// here i added a a NEWTODOS which i eventuaally append the new todoslist to the list
  const [todos, setTodos] = React.useState([
  {
    text: "this is sample todo",
    isDone: false
  }
]);


const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

//  here i created a mark todos That  make me to mark the todos as done

const markTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
};
// here i move to the part of deleting the todos

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}; 

// here i finish off the app function by 
// returning the jsx rendering that will
//  be displayed don the websitesand will 
//  display the todos using map operators

return (
    <div className = "app">
      <div className = "container">
         <h1 className = "text-center mb-4">Todo list</h1>
         <FormTodo addTodo = {addTodo}/>
          <div>
            
            {todos.map((todo,index) => (
                <Card>
                  <Card.Body>
                    <Todo
                    key={index}
                    index={index}
                    todo ={todo}
                    markTodo= {markTodo}
                    removeTodo ={removeTodo}
                    />
                  </Card.Body>
                </Card>      
            ))}
          </div>        
      </div>  
    </div>
  );
  }




export default App;
