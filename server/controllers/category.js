const Category = require('../models/category')
const formidable = require('formidable');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const fs = require('fs');



exports.createCategory = async (req, res) => {

    try {

        const { name, image, content } = req.body;
        const id = req.user._id

        const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')
        console.log("Image base64 ===>", base64Data);
        const imageType = image.split(';')[0].split('/')[1]
        console.log("Type===>", imageType);

        let category = new Category({ name, content })



        const s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_ACCESS_SECRET,
            region: process.env.AWS_REGION,

        })
        const params = {
            Body: base64Data,
            Bucket: 'hacker-se-bucket',
            Key: `category/${uuidv4()}.${imageType}`,
            ACL: 'public-read',
            ContentType: `image${imageType}`,
            ContentEncoding: 'base64'
        }

        s3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    data: "Image upload failed"
                })
            }
            console.log(data);

            category.image.url = data.location;
            category.image.key = data.Key;

            //save the category to DB
            category.save((err, success) => {
                if (err) {
                    return res.status(400).json({
                        data: "Category save failed"
                    })
                }

                return res.json({
                    success: true,
                    data: success
                })

            });


        })

    } catch (err) {
        // console.log(err);
        res.status(400).json({
            success: false,
            data: "User create Failed"
        })
    }



}


// exports.createCategory = async (req, res) => {

//     const s3 = new AWS.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_ACCESS_SECRET,
//         region: process.env.AWS_REGION,

//     })

//     try {
//         let form = new formidable.IncomingForm()
//         form.parse(req, (err, fields, files) => {
//             if (err) {
//                 return res.status(400).json({
//                     data: "Image Could not upload"
//                 })
//             }

//             const { name, content } = fields;
//             const { image } = files;
//             // console.log(image.path);
//             if (image.size > 200000) {
//                 return res.status(400).json({
//                     data: "Image size should be less then 2MB"
//                 })
//             }
//             // console.log(req);
//             //upload th image to s3


//             console.log(files.data);
//             try {
//                 const params = {
//                     Body: image.path,
//                     Bucket: 'hacker-se-bucket',
//                     Key: `category/${uuidv4()}`,
//                     ACL: 'public-read',
//                     ContentType: 'image/jpg'
//                 }
//                 s3.upload(params, async (err, data) => {
//                     console.log(err, data);
//                     if (err) {
//                         return res.status(400).json({
//                             data: "Image upload failed"
//                         })
//                     }

//                     console.log(`File uploaded successfully at ${data.Location}`)

//                     image.url = data.Location;
//                     image.key = data.Key;


//                     try {
//                         const category = Category.create({ name, content, image: { url: image.url, key: image.Key } })
//                         return res.json({
//                             success: true,
//                             data: category
//                         })
//                     } catch (err) {
//                         console.log(err);
//                         return res.json({
//                             success: true,
//                             data: "saved failed"
//                         })
//                     }


//                 });
//             } catch (err) {
//                 console.log(err);
//             }

//         })


//     } catch (err) {
//         console.log(err);
//     }
// }




exports.deleteCategory = (req, res) => {

}
exports.getCategories = (req, res) => {

}
exports.getCategory = (req, res) => {

}
exports.updateCategory = (req, res) => {

}