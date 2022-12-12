
const dotenv = require('dotenv');
const express = require('express');
const app = express();

const PORT = process.env.port || 8000;

const nodemailer = require('nodemailer');

dotenv.config({path: './config.env'});

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/public/contact.html');
});

app.post('/',(req,res)=>{
  console.log(req.body);

  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    //host:
    //port:
    auth: {
            user: 'bishwo5bista@gmail.com',
            pass: process.env.PASSWORD
        }
    });
    const mailOptions = {
      from: req.body.email,
      to: 'bishwo5bista@gmail.com',
      subject: req.body.subject,
      text: req.body.message
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log("Email sent : " + info.response);
        console.log(info);
        res.send(success);
  });
});

app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}/ `);
});



    // fetch('/',{
    //     method: 'POST',
    //     headers:{
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then((response) => response.json())
    // .then((formData) =>{
    //     console.log('Success :', formData);
    // })
    // .catch((error)=>{
    //     console.log("error:", error);
    // })

   

