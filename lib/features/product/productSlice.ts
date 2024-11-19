import {
  createProductApi,
  deleteProductByIdApi,
  getProductsApi,
  getProductsByCategoryApi,
  searchProductsByTitleApi,
  updateProductApi,
} from "./productApi";
import { createAppSlice } from "./../../createAppSlice";
import { IProduct } from "@/type/type";

interface IState {
  products: IProduct[];
  product: IProduct;
}
const initialState: IState = {
  products: [],
  product: {} as IProduct,
};

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: (create) => ({
    getProductsData: create.asyncThunk(
      async () => {
        return await getProductsApi();
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      }
    ),
    searchProductsByTitleData: create.asyncThunk(
      async (text: string) => {
        return await searchProductsByTitleApi(text);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      }
    ),
    getProductsByCategoryData: create.asyncThunk(
      async (id: number) => {
        return await getProductsByCategoryApi(id);
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload;
        },
      }
    ),
    getProductByIdData: create.asyncThunk(
      async (id: number) => {
        return await deleteProductByIdApi(id);
      },
      {
        fulfilled: (state, action) => {
          state.product = action.payload;
        },
      }
    ),
    createProductData: create.asyncThunk(async (obj: IProduct) => {
      return await createProductApi(obj);
    }),
    updateProductData: create.asyncThunk(
      async ({ id, obj }: { id: number; obj: IProduct }) => {
        return await updateProductApi({ id, obj });
      },
      {
        fulfilled: (state, action) => {
          state.product = action.payload;
        },
      }
    ),
    deleteproductByIdData: create.asyncThunk(async (id: number) => {
      return await deleteProductByIdApi(id);
    }),
  }),
  selectors: {
    selectproducts: (app) => app.products,
    selectproduct: (app) => app.product,
  },
});

export const {
  getProductsData,
  getProductByIdData,
  searchProductsByTitleData,
  getProductsByCategoryData,
  createProductData,
  updateProductData,
  deleteproductByIdData,
} = productSlice.actions;
export const { selectproducts, selectproduct } = productSlice.selectors;
