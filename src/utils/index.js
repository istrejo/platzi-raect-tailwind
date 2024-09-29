/**
 * This function calculate total price of a new order
 * @param {Array} products - An array of products with each product having a "price" property.
 * @returns {number}  The `totalPrice` function is being returned.
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
