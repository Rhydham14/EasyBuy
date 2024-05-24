const User = require("../Models/userModel");
const nodemailer = require('nodemailer');

const userService = {
  register: async (userData) => {
    try {
      const existingUser = await User.findOne({ email: userData.email });
      if (existingUser) {
        throw new Error('Email already in use');
      }
      const user = new User(userData);
      await user.save();
      return user;
    } catch (e) {
      throw e;
    }
  },

  sendEmail: async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
  }
};

module.exports = userService;
