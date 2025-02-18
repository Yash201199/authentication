const cors = require('cors');


const express = require('express');
const SECRET_KEY = " askdnliasbdfkjasdgf;iauhbef;aisduh";
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());
const users = [];
app.use(express.static("public"));


app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: "Username already exists" });
    }

    users.push({ username, password });

    res.json({ message: "Signup successful" });
});


app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
});


app.listen(3000);


function auth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1]; // Fix: Read "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        req.user = decoded;
        next();
    });
}


app.get('/me', auth, (req, res) => {
    const user = req.user;

    res.json({
        username: user.username
    })

})



