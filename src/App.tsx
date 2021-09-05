import React from "react";
import "./App.css";
import { Container, Grid, makeStyles, Theme } from "@material-ui/core";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
   const useStyles = makeStyles((theme: Theme) => ({
      root: {
         flexGrow: 1,
         marginTop: 50,
      },
      paper: {
         padding: theme.spacing(2),
         textAlign: "center",
         color: theme.palette.text.secondary,
      },
      control: {
         padding: theme.spacing(2),
      },
   }));

   // const [spacing, setSpacing] = useState<GridSpacing>(2);
   const classes = useStyles();

   // const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
   //    // setSpacing(Number(event.currentTarget.value));
   //    setSpacing(
   //       Number((event.target as HTMLInputElement).value) as GridSpacing
   //    );
   // };

   return (
      <div className="App">
         <Container maxWidth="xs" className={classes.root}>
            <Grid container spacing={3}>
               <Grid item xs={12}>
                  <NewTodo />
               </Grid>
               <Grid item xs={12}>
                  <TodoList />
               </Grid>
            </Grid>
         </Container>
      </div>
   );
}

export default App;
