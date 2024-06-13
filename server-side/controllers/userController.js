const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index')
const User = db.users

const home = (req, res)=>{
    res.send("well, this is home okay!")
}
const signUp =async (req, res)=>{
    try {
        const { full_name, username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({full_name, username, email, password: hashedPassword });
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

}

const signIn = async (req, res) =>{
 try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {signIn, signUp, home}