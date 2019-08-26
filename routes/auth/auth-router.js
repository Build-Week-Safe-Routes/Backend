require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
const User = require("./auth-model.js");

router.get("/", async (req, res) => {
  console.log("get");
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong with the server." });
  }
});

router.post("/register", async (req, res) => {
  console.log("post", req.body);
  const user = req.body;

  if (user.username && user.password) {
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    try {
      const newUser = await User.add(user);
      const token = generateToken(newUser);
      res.status(202).json({ token, newUser });
    } catch (e) {
      res.status(500).json({ error: "Something went wrong with the server." });
    }
  } else {
    res
      .status(422)
      .json({ error: "Please provide both username and password." });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) throw new Error("missing");
    const user = await User.findUser(username).first();

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error("400");
    }
    const token = generateToken(user);
    res.status(202).json(token);
  } catch (e) {
    switch (e.message) {
      case "missing":
        return res.status(422).json({ error: "Missing username or password." });
      case "400":
        return res.status(401).json({ error: "Unauthorized" });
      default:
        return res
          .status(500)
          .json({ error: "Something went wrong with the server." });
    }
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
