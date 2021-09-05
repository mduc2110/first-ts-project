import { createContext, useState } from "react";
import { Todo } from "./Todo";

type todoTypeObj = {
   items: Todo[];
   addTodo: (todo: string) => void;
   removeTodo: (id: string) => void;
};

export const TodoContext = createContext<todoTypeObj>({
   items: [],
   addTodo: () => {},
   removeTodo: () => {},
});

const TodoContextProvider: React.FC = (props) => {
   const [items, setItems] = useState<Todo[]>([]);

   const addTodo = (todo: string) => {
      // console.log(items);
      const newTodo: Todo = {
         id: Date.now().toString(),
         text: todo,
      };
      setItems((prev) => {
         return [...prev, newTodo];
      });
   };
   const removeTodo = (id: string) => {
      console.log(id);
      setItems((prev) => {
         return prev.filter((item) => item.id !== id);
      });
   };
   const todoCtxValue: todoTypeObj = {
      items,
      addTodo,
      removeTodo,
   };

   return (
      <TodoContext.Provider value={todoCtxValue}>
         {props.children}
      </TodoContext.Provider>
   );
};

export default TodoContextProvider;
