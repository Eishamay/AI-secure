const express = require('express');
const app = express();

app.get('/video', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  console.log('Received User-Agent:', userAgent); 

  
if (
  userAgent.toLowerCase().includes('ott player') ||
  userAgent.toLowerCase().includes('ott tv') ||
  userAgent.toLowerCase().includes('ott navigator')
)  {
    
    res.redirect('https://www.dropbox.com/scl/fi/urt77pk1nq7wvxwpggymn/CastproGOpremium.zip?rlkey=tbrdaa9yr8wve9sfi70tesz8z&st=4dv1gbjd&dl=1');
  } else {
    
    res.status(403).send('Mak kau oren');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure OTT Server is running on port ${PORT}`);
});
