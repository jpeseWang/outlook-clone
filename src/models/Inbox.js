import mongoose from "mongoose";

const { Schema } = mongoose;

const inboxSchema = new Schema(
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
  },
  { timestamps: true }
);

export default mongoose.models.Inbox || mongoose.model("Inbox", inboxSchema);
