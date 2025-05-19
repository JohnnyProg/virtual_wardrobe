const mongoose = require('mongoose')

const connect = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    // const url = "mongodb+srv://admin:tak@cluster0.jiclvwj.mongodb.net/?retryWrites=true&w=majority"
    // const url = "mongodb://admin:tak@cluster0-shard-00-00.jiclvwj.mongodb.net:27017,cluster0-shard-00-01.jiclvwj.mongodb.net:27017,cluster0-shard-00-02.jiclvwj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xxxxx-shard-0&authSource=admin&retryWrites=true&w=majority"
    const url = "mongodb://localhost:27017/mydatabase"
    
    try {
        mongoose.connect(url, connectionParams)
        console.log('Connected to database')
    } catch(error) {
        console.log(error)
        console.log('could not connect to database')
    }
}

module.exports = connect