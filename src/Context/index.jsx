import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Card . Increment quantity
  const [count, setCount] = useState(0);

  // Product Detail . Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Checkout Side Menu . Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  // Product Detail . Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart . Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart . Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  console.log('Products: ', products);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState('');

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState('');
  console.log('searchByCategory: ', searchByCategory);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const filterItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchYype, items, searchByTitle) => {
    if (searchYype === 'BY_TITLE') {
      return filterItemsByTitle(items, searchByTitle);
    }

    if (searchYype === 'BY_CATEGORY') {
      return filteredItemsByCategory(products, searchByCategory);
    }

    if (searchYype === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((items) =>
        items.title.toLowerCase().includes(searchByTitle)
      );
    }

    if (!searchYype) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle.trim() && searchByCategory.trim())
      setFilteredProducts(
        filterBy('BY_TITLE_AND_CATEGORY', products, searchByTitle)
      );

    if (searchByTitle.trim() && !searchByCategory.trim())
      setFilteredProducts(filterBy('BY_TITLE', products, searchByTitle));

    if (!searchByTitle.trim() && searchByCategory.trim())
      setFilteredProducts(filterBy('BY_CATEGORY', products, searchByCategory));

    if (!searchByTitle.trim() && !searchByCategory.trim())
      setFilteredProducts(filterBy(null, products, searchByCategory));
  }, [products, searchByTitle, searchByCategory]);

  console.log('FilteredProducts: ', filteredProducts);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredProducts,
        setFilteredProducts,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
