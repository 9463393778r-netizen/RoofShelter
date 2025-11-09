import mongoose, { Document, Schema } from 'mongoose'

interface IContact extends Document {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message?: string
  service?: string
  createdAt: Date
}

const ContactSchema = new Schema<IContact>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  message: String,
  service: String,
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model<IContact>('Contact', ContactSchema)