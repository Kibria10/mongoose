const mongoose = require('mongoose')
const User = require('./user')

mongoose.connect("mongodb://localhost/testdb", () => {
    console.log('Connected to MongoDB');
},
    e => console.error(e)
)
//schema (what data structure my custom objects looks like)
//model (schema that I can interact with)
//query (queries making across the mongodb database)

run()
async function run() {
    try {
        const a = await User.create({
            name: "maharab",
            age: 24,
            email: "kibRia@gmail.com",
            hobbies: ["CYCLING", "SLEEPING"],
            address: { street: "421/B, Malibagh", city: "Dhaka" }
        })
        console.log(a);
    }
    catch (error) {
        console.log(error.message)
    }
}