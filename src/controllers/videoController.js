let videos = [
  {
    title: "First Video",
    rating: 1,
    comments: 1,
    createdAt: "1 minutes ago",
    views: 11,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 2,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 22,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 3,
    comments: 3,
    createdAt: "3 minutes ago",
    views: 33,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch ${video.title}` });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "edit" });
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => res.send("deleteVideo");
