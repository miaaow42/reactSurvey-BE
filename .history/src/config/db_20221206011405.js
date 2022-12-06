const mongoose = require('mongoose')

const MONGOURI = 'mongodb+srv://yingying:YkfP2UZbqy0DYik9@cluster0.nwk3jkz.mongodb.net'

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
