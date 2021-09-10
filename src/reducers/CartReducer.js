import { GET_CART, SAVE_CART, ADD_PRODUCT, REMOVE_PRODUCT, DELETE_PRODUCT } from "./types";

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  let tmpState = state;

  switch (type) {
    case GET_CART:
      const _cart = localStorage.getItem("cart");
      if (_cart) {
        state = JSON.parse(_cart);
      }
      return state;

    case SAVE_CART:
      localStorage.setItem("cart", JSON.stringify(payload.cart));
      return state;

    case ADD_PRODUCT:
      let addedProduct = payload.product;

      let indexAddeddProduct = state.findIndex(
        (product) => product.id === addedProduct.id
      );

      if (indexAddeddProduct === -1) {
        addedProduct = {
          ...addedProduct,
          quantityInCart: 1,
        };
        state = [addedProduct, ...state];
      } else {
        tmpState[indexAddeddProduct].quantityInCart += 1;
        console.log("add", tmpState[indexAddeddProduct].quantityInCart);
        state = [...tmpState];
      }

      return state;

    case REMOVE_PRODUCT:
      let removedProduct = payload.product;

      let indexRemovedProduct = state.findIndex(
        (product) => product.id === removedProduct.id
      );

      if (state[indexRemovedProduct].quantityInCart === 1) {
        tmpState = state.filter((product) => product.id !== removedProduct.id);
        state = tmpState;
      } else {
        tmpState[indexRemovedProduct].quantityInCart -= 1;
        state = [...tmpState];
        console.log("subtract", tmpState[indexRemovedProduct].quantityInCart);
      }
      return state;

    case DELETE_PRODUCT: 
      let newCart = state.filter(product => product.id !== payload.id)
      state = [...newCart]
      return state;

    default:
      return state;
  }
};
