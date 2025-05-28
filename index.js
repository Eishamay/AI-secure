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
    
    res.redirect('https://kesporo.vercel.app/api/stream?uuid=d4031422-399f-447b-b09d-ff1f4f559df9');
  } else {
    
    res.status(403).send('Mak kau oren');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure OTT Server is running on port ${PORT}`);
});
