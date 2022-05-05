const { ApolloServer, gql } = require("apollo-server");
const { verifyToken } = require("./verifyToken");

const typeDefs = `
type Character
{
id:String!
name:String!
image:String!
},

type Query
{
hello(name:String):String!
getCharacters:[Character]!
getCharacter (id:ID!): CharacterType
},

type CharacterType{
    name:String!
    id:String!
  air_date:String!
    episode:String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }, { data }) => `Hello ${name}|world`,

    getCharacters: async () => {
      let data = await require("./data.js");
      return data;
    },

    getCharacter: async (_, { id }) => {
      let data = await require("./episode.js");
      console.log(data.find((character) => id == character.id));
      return data.find((character) => id == character.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, ...rest }) => {
    let isAuthenticated = false;
    let user = null;
    try {
      const authHeader = req.headers.authorization || "";
      if (authHeader) {
        const token = authHeader.split(" ")[1];

        const payload = verifyToken(token);
        payload.then((message) => {
          console.log(message);
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
