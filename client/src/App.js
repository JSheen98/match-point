import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Basketball from './pages/sports/basketball';
import Soccer from './pages/sports/soccer';
import Baseball from './pages/sports/baseball';
import Football from './pages/sports/football';
import Other from './pages/sports/other';
import Navbar from "./components/Navbar/Navbar";
import Profile from './pages/Profile'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import TeamForm from "./components/TeamForm";
import EventForm from "./components/EventForm";

const httpLink = createHttpLink({  
  uri: '/graphql'
})

// make sure jwt token is available with each new request
const authLink = setContext((_, { headers }) => {
  const userJwt = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: userJwt ? `Bearer ${userJwt}` : ''
    }
  }
})

// new instance of Apollo
const client = new ApolloClient({
  // executes before making request to graphql 
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// Base of the app with all routes and pages/components
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/baseball" element={<Baseball />} />
            <Route path="/football" element={<Football />} />
            <Route path="/others" element={<Other />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/team" element={<TeamForm />} />
            <Route path="/event" element={<EventForm />} />
          </Routes>
        </Router>
      </div>
    
    </ApolloProvider>
  );
}

export default App;
