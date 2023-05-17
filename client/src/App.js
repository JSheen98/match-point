import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
