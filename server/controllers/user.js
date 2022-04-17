exports.read = (req, res) => {
    res.json({
        user: req.profile
    })
}