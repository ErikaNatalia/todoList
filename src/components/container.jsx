import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div className="form">
      <FormTodo handleAddItem={handleAddItem} /* Metodo con el que se actualiza la lista */ />
      <TaskList list={list} setList={setList} /* Estado, en task se crearon los atributos *//>
    </div>
  );
};
export default Container;


