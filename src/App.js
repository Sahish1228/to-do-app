import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
function App() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const addTask = () => {
    const nTask = {
      name: task,
      completed: false,
      editMode: false,
    };
    setTaskArr([...taskArr, nTask]);
    setTask("");
  };
  const editToggleTask = (position) => {
    setTaskArr(
      taskArr.map((task, index) => {
        if (index === position) {
          return {
            ...task,
            editMode: !task.editMode,
          };
        } else {
          return task;
        }
      })
    );
  };
  // const shiftUpTask = (position) => {
  //   console.log("old array" , taskArr);
  //   const copy=taskArr[position];
  //   taskArr[position]=taskArr[position-1];
  //   taskArr[position-1]= copy;
  //   console.log("new array" , taskArr);
  //   setTaskArr(taskArr);
  // };
  const shiftUpTask = (position) => {
    console.log("old array" , taskArr);
    const nTaskArray = taskArr.map((element, index) => {
      if(position === index){
        return taskArr[index-1];
              }
              else if(index === position-1){
                return taskArr[position];
              }
              else{
                return taskArr[index];
              }
    })
    console.log("new array" , nTaskArray);
    setTaskArr(nTaskArray);
  };
  const shiftDownTask = (position) => {
    console.log("old array" , taskArr);
    const nTaskArray = taskArr.map((element, index) => {
      if(position === index){
return taskArr[index+1];
      }
      else if(index === position+1){
        return taskArr[position];
      }
      else{
        return taskArr[index];
      }
    })
    console.log("new array" , nTaskArray);
    setTaskArr(nTaskArray);
  };
  const deleteTask = (position) => {
    const newTaskArr = taskArr.filter((element, index) => {
      return index !== position;
    });
    setTaskArr(newTaskArr);
  };
  const markAsCompleteToggleTask = (position) => {
    setTaskArr(
      taskArr.map((task, index) => {
        if (index === position) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };
  const editTaskName = (value, position) => {
    setTaskArr(
      taskArr.map((task, index) => {
        if (index === position) {
          return {
            ...task,
            name: value,
          };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <h1>
        <strong>TO DO APP</strong>
      </h1>
      <input
        type="text"
        value={task}
        placeholder="Add Task.."
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button type="button" className="btn" onClick={addTask}>
        ADD TASK
      </button>
      <br />
      <br />
      <h4>TASK</h4>
      <ol type="i">
        {taskArr.map((element, index) => {
          // console.log(element);
          return (
            <div>
              <li type="1">
                {element.editMode === true ? (
                  <input
                    value={element.name}
                    onChange={(event) =>
                      editTaskName(event.target.value, index)
                    }
                  ></input>
                ) : (
                  <p
                    style={{
                      color: "brown",
                      fontSize: 35,
                      backgroundcolor: "aqua",
                      textDecoration:
                        element.completed === true ? "line-through" : "none",
                    }}
                  >
                    {element.name}
                  </p>
                )}
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteTask(index)}
                >
                  DELETE
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => markAsCompleteToggleTask(index)}
                >
                  {element.completed
                    ? "MARK AS UNCOMPLETE"
                    : "MARK AS COMPLETE"}
                </button>
                {!element.completed ?< button
                  type="button"
                  className="btn"
                  onClick={() => editToggleTask(index)}
                  
                >
                  {element.editMode ? "SAVE" : "EDIT"}
                </button>:null}
                <button
                  type="button"
                  className="btn"
                  onClick={() => shiftUpTask(index)}
                >UP</button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => shiftDownTask(index)}
                >Down</button>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
