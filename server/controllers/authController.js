var User = require("../models/users");
var md5 = require("md5");

module.exports = {
  register: async (req, res) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userEmail: req.body.userEmail,
      userPassword: md5(req.body.userPassword),
      // userConfirmPassword: md5(req.body.userConfirmPassword),
      role: "USER",
    });

    try {
      await User.create(user);
      res.json({ status: true, message: "Register Successful!" });
    } 
    catch (error) {
      res.json({ status: false, message: "Register Failed!" });
    }
  },
};
