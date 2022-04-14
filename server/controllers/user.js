const AWS = require('aws-sdk');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({
            success: false,
            data: 'Invalid Or email is already taken Try with another'
        })
    }

    const token = jwt.sign({ name, email, password }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TOKEN_EXPIRES
    })

    //optional for jwt cookies
    const options = {
        //jwt token cookie gets expires in  
        expires: new Date(Date.now() + process.env.JWT_TOKEN_COOKIE_EXPIRES * 24 * 12 * 60 * 1000),
        httpOnly: true
    }



    //send email
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_ACCESS_SECRET,
        region: process.env.AWS_REGION,

    })

    const params = {
        Destination: {
            ToAddresses: [
                email
            ],
        },
        ReplyToAddresses: [process.env.EMAIL_TO],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `<html>
                    <h1>Hey, ${name}!</h1>
                    <p>Click the following link to complete your registration</p>
                     <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                    </html>`
                }

            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Complete Your registration'
            }
        },
        Source: process.env.EMAIL_FROM

    }

    // Create the promise and SES service object
    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
    sendPromise
        .then(data => {
            console.log("Email submites =>", data);
            res.status(200)
                .cookie('token', token, options)
                .json({
                    Success: true,
                    token: token,
                    data: `Email has been sent to ${email}`
                })

        }).catch(err => {
            console.log(err);
            res.status(400).json({
                success: false,
                data: "Email sent failed try again with a Valid email"
            })
        })

}



