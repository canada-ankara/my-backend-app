const bcrypt = require('bcryptjs');

const password = 'admin123';
bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Hashleme hatası:', err);
  } else {
    console.log('Hashlenmiş şifre:', hash);
  }
});