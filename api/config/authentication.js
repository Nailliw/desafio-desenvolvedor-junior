const passport = require("passport");
const LocalPassport = require("passport-local").Strategy;

const Users = require("../controllers/UserController");

passport.use(
  new LocalPassport(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    async (email, password, done) => {
      try {
        const User = await Users.searchEmail(email, password);
        if (!User) {
          done("user or password incorrect", User);
        }
        // a variavel User retorna o usuário procurado por email.
        console.log("authentication " + User.email);
        done(null, User);
      } catch (error) {
        done(error);
      }
    }
  )
);
