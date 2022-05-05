const verifyToken = async (bearerToken) => {
  const jwt = require("jsonwebtoken");
  const jwksClient = require("jwks-rsa");

  const client = jwksClient({
    jwksUri: "https://dev-gn995sp2.us.auth0.com/.well-known/jwks.json",
  });

  function getJwksClietKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }

  return new Promise((resolve, reject) => {
    jwt.verify(
      bearerToken,
      getJwksClietKey,
      {
        audience: "https://fullstack-gql-api",
        // issuer:"https://dev-gn995sp2.us.auth0.com",
        algorithm: ["RS256"],
      },
      function (err, decoded) {
        if (err) reject("not verified");
        resolve("token verified");
      }
    );
  });
};
module.exports = { verifyToken };
