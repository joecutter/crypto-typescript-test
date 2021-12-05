const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const helper = require("../helpers/Helper");
const logger = helper.getLogger("PASSPORT");
const UserScript = require("../query/UserQuery");

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (username, password, done) => {
      const existingUser = await UserScript.findUserByEmail(username);
      if (existingUser === null) {
        logger.error("User doesn't Exist ", username);
        return done(null, false, { message: "User Account does not exists" });
      }

      if (!existingUser.validPassword(password)) {
        logger.error("Validate Password Failed");
        return done(null, false, { message: "Validate Password Failed" });
      }

      logger.debug("Validate Password Success");
      return done(null, existingUser);
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  return done(null, await UserScript.findUserById(id));
});
