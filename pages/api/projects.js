const axios = require("axios");

export const getProjects = async () => {
  try {
    const res = await axios.get("https://api.avegganorkar.com/api/projects");
    return res.data;
  } catch (err) {
    console.error("Error fetching projects:", err);
    throw err;
  }
};

export default async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};
