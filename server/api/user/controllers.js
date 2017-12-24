import jwt from 'jsonwebtoken';

const getUserPublications = (req, res, next) => {
  const publications = [
    {
      text: 'Ayer me fui a la playa y volví quemado, denme like para recuperarme',
      createdAt: new Date(),
      file: null,
    },
    {
      text: '¿Como securizaremos nuestra aplicación web? adelante, comentad',
      createdAt: new Date(),
      file: null,
    },
    {
      text: 'Vendo suegra de segunda mano, muerde solo los domingos',
      createdAt: new Date(),
      file: null,
    },
  ];

  res.status(200).json({
    publications,
    userData: req.user,
  });
};

const loginUser = (req, res, next) => {
  const { email, password } = req.body;

  jwt.sign({ email, password }, 'SECRETKEY', { expiresIn: '2h' }, (error, TOKEN) => {
    if (error) return res.status(500).json({ error: 'ERROR SIGNING THE TOKEN' });
    res.cookie('access_token', TOKEN, {
      expires: new Date(Date.now() + 10000000),
      httpOnly: true,
    });
    return res.status(200).json({ message: 'User logged with success' });
  });
};

export { getUserPublications, loginUser };
