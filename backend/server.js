const dns = require('dns');
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const Message = require("./models/message");

const app = express();

app.use(cors());
app.use(express.json());


console.log("URI =", JSON.stringify(process.env.MONGO_URI));
mongoose.connection.on("connected", () => {
  console.log("Mongoose Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose Disconnected");
});

console.log("URI =", process.env.MONGO_URI);
console.log("MONGO_URI exists:", !! process.env.MONGO_URI);
console.log("EMAIL_USER exists:", !! process.env.EMAIL_USER);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Mongo Error:", err);
  });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log("Email Error:", err);
  } else {
    console.log("Email Server Ready");
  }
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save in MongoDB
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,

      subject: `Portfolio Message from ${name}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
