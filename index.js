const express = require('express');
const app = express();

app.get('/video', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  console.log('Received User-Agent:', userAgent); 

  
  if (userAgent.toLowerCase().includes('ott player')) {
    
    res.redirect('https://www.dropbox.com/scl/fi/7rjbduofncp7xsd9vx1of/CastproGold-FP-2025.zip?rlkey=wxw3nujekhouijvt4ldzjnjjd&st=dz2qad5p&dl=1');
  } else {
    
    res.status(403).send('Mak kau oren');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure OTT Server is running on port ${PORT}`);
});
