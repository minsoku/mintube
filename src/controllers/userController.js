export const join = (req, res) =>
  res.render("createAccount", { pageTitle: "createAccount" });
export const edit = (req, res) => res.send("edit");
export const deleteUser = (req, res) => res.send("delete");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
