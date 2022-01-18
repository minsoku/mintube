import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { email, username, name, password, password2, location } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match ",
    });
  }
  if (exists) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username/email is already taken",
    });
  }
  await User.create({
    email,
    username,
    name,
    password,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("edit");
export const deleteUser = (req, res) => res.send("delete");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
