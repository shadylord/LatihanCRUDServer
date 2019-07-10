const express = require("express");
const router = express.Router();
const User = require("../models/User");

// users
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(201).send(users);
  } catch (error) {
    res.status(400).send({ message: "Failed" });
  }
});

// get user berdasarkan id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: "Failed" });
  }
});

// create new user
router.post("/add", async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    console.log(user);
    res.status(201).send({ message: "Success!" });
  } catch (error) {
    res.status(400).send({ message: "Failed!" });
  }
});

// delete user berdasarkan id
router.delete("/delete/:id", async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(201).send("Success!");
  } catch (error) {
    res.status(400).send({ message: "Failed!" });
  }
});

// update user berdasarkan id
router.patch("/update/:id", (req, res) => {
  try {
    const user = User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(201).send({ message: "Success!" });
  } catch (error) {
    res.status(400).send({ message: "Failed!" });
  }
});

module.exports = router;
