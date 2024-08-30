const user = require('../models/user'); 

exports.getuserswithpasswords = async (req, res) => {
    try {
        // Fetch only the username field from the users
        const users = await user.find({});

        // Send a successful response with the usernames
        res.status(200).json({
            status: 'success',
            data: users
        });
    } catch (err) {
        // Handle any errors that occur during the query
        res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
};
