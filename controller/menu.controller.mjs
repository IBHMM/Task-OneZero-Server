import { calculateDiscount, formatDate, getMenu } from "../utils/utils.mjs";

export const Menu = {
    GetAllMenu : (req, res) => {
        const menu =  getMenu();
        const { date } = req.query;
      
        if (date) {
          const formattedDate = formatDate(date);
          const discountedMenu = menu.map(item => calculateDiscount(item, formattedDate));
          return res.json(discountedMenu);
        }
      
        return res.json(menu);
    },

    GetItemById : (req, res) => {
        const menu = getMenu();
        const { date } = req.query;
        const id = parseInt(req.params.id);
        const item = menu.data.categories
          .flatMap(category => category.menuItems)
          .find(item => item.id === id);
      
        if (!item) {
          return res.status(404).json({ error: 'Product not found' });
        }
      
        if (date) {
          const formattedDate = formatDate(date);
          const discountedItem = calculateDiscount(item, formattedDate);
          return res.json(discountedItem);
        }
      
        return res.json(item);
    }
}