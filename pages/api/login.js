import dbConnect from "../../utils/mongoose";
import User from "../../models/User";

export default async function handler(req, res) {
  const { method } = req;
  // CONNECT TO DB.
  await dbConnect();
  // Process http req by method.
  switch (method) {
    case "GET":
      break;
    case "POST":
      // Process a POST request
      // login user.
      const { password, email } = req.body;
      console.log("body", req.body);
      const user = User({
        email,
        password,
      });
      // register new user
      await loginUser(user);

      // find user by email function
      async function findUserByEmail(email) {
        try {
          const query = { email: email };
          const user = await User.findOne(query);
          // return user
          return user;
        } catch (error) {
          console.log(error);
          throw new Error("Unable to find user by email.");
        }
      }

      // register new user function
      async function loginUser(user) {
        try {
          // check if the user email exists in db.
          const user = await findUserByEmail(email);
          // if user email is not exists.
          if (!user) {
            return res.status(200).json({
              user: null,
              loginStatus: "failed",
              errorMessage: "user failed to login. email is not exists",
            });
          }
          // if email exists send corresponding message and status.
          if (user) {
            //validate user credentials
            const isUserValid = user.password === req.body.password;
            // if valid return user and success message.
            if (isUserValid) {
              return res.status(200).json({
                user: user,
                loginStatus: "success",
                message: "user logged in successfully.",
              });
            } else {
              return res.status(200).json({
                user: null,
                loginStatus: "failed",
                message: "request password isn't match user password.",
              });
            }
          }
        } catch (error) {
          console.log(error);
          throw new Error("Unable to register new user.");
        }
      }
      break;
    case "PUT":
      break;
    case "DELETE":
      break;

    default:
      break;
  }
}
