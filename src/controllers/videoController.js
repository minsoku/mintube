export const trending = (req, res) => res.render("home", { pageTitle: "home" });
export const watch = (req, res) => res.render("watch", { pageTitle: "watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" });
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
