// pages/api/[...resume].js

export default function handler(req, res) {

    const googleDriveLink = `https://drive.google.com/file/d/1dh7gkqduviQ-Or27VGA0sfCskNM6ZPq8/view`;
  
    res.redirect(googleDriveLink);
  }
  
