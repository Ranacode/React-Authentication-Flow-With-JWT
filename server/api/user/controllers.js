import jwt from 'jsonwebtoken';

const getUserPublications = (req, res, next) => {
  res.status(200).json({
    message: 'PUBLICACIONES DEL FUCKING USUARIO',
    userData: req.user,
  });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  jwt.sign({ email, password }, 'SECRETKEY', (error, TOKEN) => {
    if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
    res.set('Authorization', TOKEN);
    return res.status(200).json({ TOKEN });
  });
};

export { getUserPublications, loginUser };
