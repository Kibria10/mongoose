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
    const b = await User.where("age").equals(28);
    console.log(b);
    // try {
    //     const a = await User.create({
    //         name: "Sanjib",
    //         age: 28,
    //         email: "sanjib@gmail.com",
    //         hobbies: ["CODING", "FOOTBALL"],
    //         address: { street: "Khilkhet rd.", city: "Dhaka" }
    //     })
    //     console.log(a);
    // }
    // catch (error) {
    //     console.log(error.message)
    // }
}