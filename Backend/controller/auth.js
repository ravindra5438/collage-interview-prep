const User = require("../models/User");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: true, message: "please enter all the values" });
        }
        const existingUser = await User.findOne({ username: username });
        if (!existingUser) {
            return res.status(400).json({ error: true, message: 'invalid credentials' });
        }
        res.status(200).json({error:false,message:'login successful',data:existingUser})
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: true, message: error.message || "server error" })
    }
}

const signUp = async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;

        //checking for all the requirements
        if (!username || !password) {
            return res.status(400).json({ error: true, message: "please enter all the values" });
        }
        // if(username.length < 8 || password.length < 8){
        //     return res.status(400).json({error:true,message:"username or password must be atleast 8 characters"});
        // }
        // existing user check
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({ error: true, message: 'user already exists' });
        }
        //if user does not exists
        const newUser = new User({ username, password });
        const user = await newUser.save();
        res.status(201).json({ error: false, message: "user created successfully", data: user });
    }
    catch (error) {
        res.status(500).json({ error: true, message: error.message || "server error" });
    }
}

module.exports = { login, signUp };