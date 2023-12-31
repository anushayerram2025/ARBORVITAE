const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', async function (req, res) {
  const { fname, fmail, text } = req.body;
  console.log("HELOOO");
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  const pass1=process.env.pass

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      
      auth: {
        user: "dvkr4846@gmail.com",
        pass: pass1
      }
    });

    // Send email
    await transporter.sendMail({
      from: "dvkr4846@gmail.com",
      to: 'arborvitae.ai@gmail.com',
      subject: 'ARBORVITAE',
      text: `${fname}\n${fmail}\n${text}`
    });

    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email.');
  }
 
});

// For any other requests, serve the "index.html" file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
