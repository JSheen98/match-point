const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    // Query: {

    // },
    Mutation: {
        // signup mutation
        addUser: async (parent, { username, email, password, phoneNumber }) => {
            // create the user with the params
            const user = await User.create({ username, email, password, phoneNumber })
            // sign the token with new user attached
            const token = signToken(user)

            // return the token and the user
            return { token, user }
        },
        // login mutation
        login: async (parent, { email, password }) => {
            // look for user associated with the email
            const user = await User.findOne({ email })

            // if no user exists in db with that email, throw error
            if (!user) {
                throw new AuthenticationError('Username or password is incorrect')
            }

            // test given password against db password for given user
            const correctPw = await user.isCorrectPassword(password)

            // if the password is not correct, throw error
            if (!correctPw) {
                throw new AuthenticationError('Username or password is incorrect')
            }
            // sign token to user
            const token = signToken(user)

            // return token and user
            return { token, user }
        }
    }
}

module.exports = resolvers