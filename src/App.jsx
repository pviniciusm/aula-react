import "./App.css";
import React from "react";

import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";

const themes = {
    dark: {
        bgColor: "#333",
        color: "white",
        primary: "#3f4",
    },
    light: {
        bgColor: "#ffffff",
        color: "#a30f0f",
        primary: "#ffa733",
    },
};

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={themes.dark}>
                <GlobalStyle />
                <h1>Menu da aplicação</h1>
                <hr />
                <Router></Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
