const Category = require('../models/category')



exports.createCategory = async (req, res) => {

    try {

        const { name, image, content } = req.body;

        const id = req.user._id
        const category = await Category.create({ name, content, pstedBy: id });

        res.json({
            success: true,
            data: category
        })

    } catch (err) {
        // console.log(err);
        res.status(400).json({
            success: false,
            data: "User create Failed"
        })
    }



}










exports.deleteCategory = (req, res) => {

}
exports.getCategories = (req, res) => {

}
exports.getCategory = (req, res) => {

}
exports.updateCategory = (req, res) => {

}