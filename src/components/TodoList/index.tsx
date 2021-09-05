import { Grid, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { TodoContext } from "../../store/todo-ctx";
import TodoItem from "./TodoItem";

const TodoList = () => {
   const todoCtx = useContext(TodoContext);

   return (
      <div>
         {todoCtx.items.map((item) => (
            <TodoItem key={item.id} todo={item} />
         ))}
      </div>
   );
};
export default TodoList;
