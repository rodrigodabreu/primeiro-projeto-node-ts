import express from 'express';
import routes from './routes';

const app = express();
const serverPort = 3333;

app.use(express.json())
app.use(routes)

app.listen(serverPort, () => {
  console.log(`🚀Server started on port: ${serverPort}`);
});
