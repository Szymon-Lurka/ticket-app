import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("You're signout!");
});

export { router as signOutRouter };
