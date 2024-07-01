const axios = require("axios");

export const getSkills = async () => {
  try {
    const res = await axios.get("https://api.avegganorkar.com/api/skills");
    return res.data;
  } catch (err) {
    throw err;
  }
};


export default (req, res) => {
  const skills = getSkills();
  res.json(skills);
};
