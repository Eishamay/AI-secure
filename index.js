const express = require('express');
const app = express();

app.get('/video', (req, res) => {
  const userAgent = req.get('User-Agent') || '';
  console.log('User-Agent:', userAgent);

  if (userAgent.includes('AppNovatica')) {
    res.redirect('https://www.dropbox.com/scl/fi/8k58xibfavdvutowgx5xv/Clawfoot.mkv?rlkey=w1yxrj7idv1dzpm9qveve79sr&st=8ee03it3&dl=1');
  } else {
    res.status(403).send('Access Forbidden');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure OTT Server running on port ${PORT}`);
});