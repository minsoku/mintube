import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { email, username, name, password, password2, location } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render(pageTitle, {
      pageTitle,
      errorMessage: "Password confirmation does not match ",
    });
  }
  if (exists) {
    return res.status(400).render(pageTitle, {
      pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }
  try {
    await User.create({
      email,
      username,
      name,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.render.status(400).render(pageTitle, {
      pageTitle,
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  const ok = await bcrypt.compare(password, user.password);
  if (!user) {
    return res.status(400).render(pageTitle, {
      pageTitle,
      errorMessage: "An account with this username does noe exists",
    });
  }
  if (!ok) {
    return res.status(400).render(pageTitle, {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const edit = (req, res) => res.send("edit");
export const deleteUser = (req, res) => res.send("delete");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
