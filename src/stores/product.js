import { defineStore } from 'pinia';
import { product as productApi } from '../api';

export const useProductStore = defineStore(
    {
        id: 'product',

        state: () => ({
            product: null,
        }),
        getters: {
            getProductList: (state) => {
                try {
                    return state.product.data.products.data
                } catch (error) {
                    return null;
                }
            },
            getCurrentPage(state) {
                return state.product.data.products.current_page;
            },
            getLastPage(state) {
                return state.product.data.products.last_page;
            }
        },
        actions: {
            async getProductFromServer() {
                this.product = await productApi.get();
            }
        }
    }
)

