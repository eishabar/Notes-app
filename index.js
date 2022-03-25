import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import Notes from "./Notes.js";
import { Paper, Container } from "@material-ui/core";


ReactDOM.render(
  
  <React.StrictMode>
    <Paper style={{ height: "200vh" }}>
        <Container>
          <Header />
          <Notes />
        </Container>
      </Paper>
  </React.StrictMode>,
  document.getElementById("root")
);