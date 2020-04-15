import { Document, Schema, Model, model, Types } from 'mongoose'

export default interface IUser {
  first_name: string
  last_name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
})

export const User: Model<IUserModel> = model<IUserModel>('User', userSchema, 'users')
