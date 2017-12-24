import app from './config/express';

const PORT = process.env.PORT || 8001;

app.listen(PORT, (error) => {
  if (error) console.error(`INTERNAL SERVER ERROR: ${error}`);
  console.log(`Server listening on port: ${PORT}...`);
});
