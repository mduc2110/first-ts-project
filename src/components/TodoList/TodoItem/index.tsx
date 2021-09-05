import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";
import React, { useContext } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { TodoContext } from "../../../store/todo-ctx";
import { Todo } from "../../../store/Todo";
const useStyles = makeStyles((theme: Theme) => {
   return createStyles({
      root: {
         marginTop: "20px",
         padding: "10px",
         userSelect: "none",
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
      },
      action: {
         "&:hover": {
            cursor: "pointer",
         },
      },
   });
});

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
   const todoCtx = useContext(TodoContext);
   const classes = useStyles();
   const { id, text } = props.todo;
   return (
      <li>
         <Paper className={classes.root}>
            {text}
            <DeleteOutlineIcon
               className={classes.action}
               color="action"
               onClick={() => todoCtx.removeTodo(id)}
            />
         </Paper>
      </li>
   );
};

export default TodoItem;
