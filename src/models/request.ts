import mongoose from 'mongoose';

const RequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  buget: {
    type: String,
    required: false,
  },
  deadline: {
    type: String,
    required: false,
  },
  details: {
    type: String,
    required: true,
  },
});

export const Request = mongoose.model("RequestRequest", RequestSchema);