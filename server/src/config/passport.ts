import passport from 'passport'
import passportLocal from 'passport-local'
import passportJwt from 'passport-jwt'

import { matchPassword } from '../utils/helpers'

import { User } from '../models/user'

const LocalStrategy = passportLocal.Strategy
const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

passport.serializeUser<any, any>((user, done) => {
  done(null, user)
})

passport.deserializeUser<any, any>((obj, done) => {
  done(null, obj)
})

// Local
passport.use(
  new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ email })
      if (!user) return done(null, false)

      const isMatch = await matchPassword(user.password, password)
      if (!isMatch) return done(null, false)

      return done(null, user)
    } catch (error) {
      done(error, false)
    }
  }),
)

//Jwt
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: process.env.SECRET,
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub._id)
        if (!user) return done(null, false)
        return done(null, user)
      } catch (error) {
        done(error, false)
      }
    },
  ),
)
