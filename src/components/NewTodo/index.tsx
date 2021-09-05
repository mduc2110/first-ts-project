import {
   Button,
   FormControl,
   Input,
   InputLabel,
   makeStyles,
   Theme,
   createStyles,
} from "@material-ui/core";
import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../store/todo-ctx";

const useStyles = makeStyles((theme: Theme) => {
   return createStyles({
      root: {
         display: "flex",
      },
      control: {
         padding: theme.spacing(2),
      },
   });
});

const NewTodo = () => {
   const classes = useStyles();
   const [todo, setTodo] = useState("");
   const todoCtx = useContext(TodoContext);

   const submitHandler = (event: FormEvent) => {
      event.preventDefault();
      if (todo.trim() === "") {
         return;
      }
      todoCtx.addTodo(todo);
      setTodo("");
   };

   return (
      <form onSubmit={submitHandler} className={classes.root}>
         <FormControl fullWidth>
            <InputLabel htmlFor="my-input">To do</InputLabel>
            <Input
               id="my-input"
               aria-describedby="my-helper-text"
               value={todo}
               onChange={(e) => setTodo(e.target.value)}
            />
            {/* <FormHelperText id="my-helper-text">
               We'll never share your email.
            </FormHelperText> */}
         </FormControl>
         <Button variant="contained" color="primary" type="submit">
            Add
         </Button>
      </form>
   );
};

export default NewTodo;
