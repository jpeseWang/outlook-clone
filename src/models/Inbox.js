import mongoose from "mongoose";

const { Schema } = mongoose;

const emailSchema = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    datetime: {
      type: String,
      required: true,
    },
    senderFullname: {
      type: String,
      required: true,
    },
    senderAvatar: {
      type: String,
    },
    senderID: {
      type: String,
    },
    comment: [
      {
        name: {
          type: String,
        },
        id: {
          type: String,
        },
        avatar: {
          type: String,
        },
        content: {
          type: String,
        },
        date: {
          type: String,
        },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Email || mongoose.model("Email", emailSchema);
