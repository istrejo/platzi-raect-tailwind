/**
 * The `totalPrice` function calculates the total price of a list of products by summing up their
 * individual prices.
 * @param products - An array of products with each product having a "price" property.
 * @returns The `totalPrice` function is being returned.
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0);
};
