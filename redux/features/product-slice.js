import { createSlice } from '@reduxjs/toolkit';
import productsItems from '../../data/products';

const initialState = {
  products: productsItems,
  product: {},
  priceFilter: null,
  item_offset: 0,
  forcePage: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    single_product: (state, { payload }) => {
      state.product = state.products
        .map((item) => item.product)
        .flat()
        .find((product) => product.id === payload);
    },
    specific_product: (state, { payload }) => {
      state.product = state.products.map(item => item.product).flat().find(item => item.id == payload)
    },
    add_item_offset: (state, { payload }) => {
      state.item_offset = payload;
    },
    add_force_page: (state, { payload }) => {
      state.forcePage = payload;
    },
  },
})

export const { single_product, priceFilter, specific_product,add_force_page,add_item_offset } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
export default productSlice.reducer