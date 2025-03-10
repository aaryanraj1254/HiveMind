// seed.js
const mongoose = require("mongoose");
const Event = require("./models/Event.js");
const User = require("./models/User.js");

async function seed_events() {
  await mongoose.connect("mongodb://localhost:27017/hivemind"); // NOTE: your conn string
  console.log("✅ MongoDB connected");

  const user = await User.findOne({ email: "testuser1@example.com" }); // NOTE: our user_id

  const event = new Event({
    title: "tech event",
    date: new Date(),
    location: "new delhi",
    createdBy: user._id,
  });

  await event.save();
  console.log("events",event);
}


seed_events();