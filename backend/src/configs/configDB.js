const mongoose = require('mongoose')

const connect = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const url = "mongodb+srv://admin:tak@cluster0.jiclvwj.mongodb.net/?retryWrites=true&w=majority"
    try {
        mongoose.connect(url, connectionParams)
        console.log('Connected to database')
    } catch(error) {
        console.log(error)
        console.log('could not connect to database')
    }
}

module.exports = connect