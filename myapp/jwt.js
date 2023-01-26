// кодування токену
const jwt = require("jsonwebtoken");

const payload = { id: 123456, username: "Larson" };
const secret = "secret word";
const token = jwt.sign(payload, secret);

console.log(token);
// розкодування токену
const decode = jwt.decode(token);

console.log(decode);

// Для автентифікації токена необхідно використовувати функцію верифікації.
const verify = jwt.verify(token, secret);

console.log(verify);
