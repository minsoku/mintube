import Video from "../models/Video";

export const home = (req, res) => {
  Video.find();
  return res.render("home", { pageTitle: "Home" });
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watch ${video.title}` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Edit , ${video.title}` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

// 비디오 배열에 추가 할 거임
export const postUpload = (req, res) => {
  videos.push(newVideo);
  return res.redirect("/");
};
