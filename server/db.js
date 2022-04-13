const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(process.env.DB, connectionParams);
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
};
