import { menu } from './router/menu.route.mjs';
import { getMenu, calculateDiscount, formatDate } from './utils/utils.mjs';
import express from 'express'
const app = express();
app.use(express.json());


app.use('/api/v1', menu);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
