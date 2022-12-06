const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
const MONGOURI = process.env.MONGODB_URI || 'mongodb+srv://yingying:YkfP2UZbqy0DYik9@cluster0.nwk3jkz.mongodb.net'

const InitiateMongoServer = () => {
	mongoose.connect(MONGOURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log('connected to mongodb!')
	}).catch(() => {
		console.log('error connecting to db')
	})
}

module.exports = InitiateMongoServer
