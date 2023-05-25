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
import Calendar from "./pages/Calendar";
import Events from './pages/Events'
import Basketball from './pages/sports/basketball';
import Soccer from './pages/sports/soccer';
import Baseball from './pages/sports/baseball';
import Football from './pages/sports/football';
import Other from './pages/sports/other';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';
import Profile from './pages/Profile'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
// import EventList from './components/EventList';
import TeamForm from "./components/TeamForm";

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

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Sidebar /> */}
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events" element={<Events />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/baseball" element={<Baseball />} />
            <Route path="/football" element={<Football />} />
            <Route path="/others" element={<Other />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/Team" element={<TeamForm />} />
          </Routes>
        </Router>
        {/* <EventList /> */}
      </div>
    
    </ApolloProvider>
  );
}

export default App;
