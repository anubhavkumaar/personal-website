const axios = require("axios");


export const getCertificates = async () => {
  try {
    const res = await axios.get("https://api.avegganorkar.com/api/certificates");
    return res.data;
  } catch (err) {
    throw err;
  }
};


export default (req, res) => {
  const certificates = getCertificates();
  res.json(certificates);
};
