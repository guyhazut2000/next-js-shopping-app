import User from "../../models/User";
import dbConnect from "../../utils/mongoose";

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
      try {
        // create new user.
        const { username, password, email } = req.body;
        const newUser = User({
          username,
          password,
          email,
        });
        // register new user
        await registerNewUser(newUser);

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
        async function registerNewUser(newUser) {
          try {
            // check if the user email exists in db.
            const user = await findUserByEmail(email);
            // if email exists send corresponding message and status.
            if (user) {
              return res.status(202).json({
                user: null,
                registerStatus: "failed",
                errorMessage:
                  "user failed to register, email is already been used.",
              });
            }
            console.log("new user create, user = ", newUser);
            // save new user in db.
            newUser.save();
            // return new user with status and message.
            if (newUser) {
              return res.status(201).json({
                user: newUser,
                registerStatus: "success",
                message: "user registered with success.",
              });
            }
          } catch (error) {
            console.log(error);
            throw new Error("Unable to register new user.");
          }
        }
      } catch (error) {
        res.json(error);
        res.status(405).end();
        resolve();
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
