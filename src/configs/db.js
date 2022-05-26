const { default: mongoose } = require("mongoose");

const connect = () => {
	return mongoose.connect(
		"mongodb+srv://aditya1:aditya1@practice.dmokj.mongodb.net/MyuserDB?retryWrites=true&w=majority"
	);
};

module.exports = { connect };

