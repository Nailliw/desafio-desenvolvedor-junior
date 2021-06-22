const { Router } = require("express");
const UserController = require("../controllers/UserController");
const passport = require("passport");
const router = Router();

router.post(
  "/Users/login",
  passport.authenticate("local", {
    failureRedirect: "/Users/login",
    session: false,
  }),
  UserController.login
);
router.get("/Users", UserController.listAll);
router.get("/Users/:UserID", UserController.listById);
router.post("/Users", UserController.createPerson);
router.patch("/Users/:UserID", UserController.updatePerson);
router.delete("/Users/:UserID", UserController.deletePerson);

module.exports = router;
