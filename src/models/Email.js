// src/models/Email.js

import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
  },
  { timestamps: true }
);


export default mongoose.models.Email || mongoose.model('Email', EmailSchema);
