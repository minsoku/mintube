import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { email, username, name, password, location } = req.body;
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
