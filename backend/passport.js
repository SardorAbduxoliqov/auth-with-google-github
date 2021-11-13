const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "820119932083-i6um0bljo3rbq60d04s8lb45pm6j8g8i.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "Iv1.c58a0ee6e140abc1";
const GITHUB_CLIENT_SECRET = "0d7fb69b086dd2d73d5c3ede66461df4f551209d";


const FACEBOOK_APP_ID = "420692896371852";
const FACEBOOK_APP_SECRET = "cd6539a2a63a9af5a1c487a7ad83c799";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
