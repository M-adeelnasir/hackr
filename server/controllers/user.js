exports.createUser = (req, res) => {
    try {
        console.log("Data From client side ===>", req.body);
    } catch (err) {
        console.log(err);
    }
}