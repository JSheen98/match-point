const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
const { authMiddleware } = require('./utils/auth')

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3001
// new apollo server using our custom queries and mutations, plus context
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // allows user session
  context: authMiddleware
})

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  });
}

startApolloServer()