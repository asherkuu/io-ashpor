import auth0 from "lib/auth0";

const login = async (req, res) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (err) {
    console.error(err);
    res.status(err.status || 400).end(err.message);
  }
};

export default login;
