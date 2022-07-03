import { defineStore } from 'pinia';
import { product as productApi } from '../api';

export const useProductStore = defineStore(
    {
        id: 'product',

        state: () => ({
            mainData: null,
            loading: true
        }),

        getters: {
            getProductList: (state) => {
                try {
                    return state.mainData.data.products.data
                } catch (error) {
                    return null;
                }
            },
            getCurrentPage(state) {
                return state.mainData.data.products.current_page;
            },
            getLastPage(state) {
                return state.mainData.data.products.last_page;
            }
        },
        actions: {
            async getProductFromServer(filter = { page: this.page }) {
                this.loading = true;
                this.mainData = await productApi.get(filter);
                this.loading = false;

            }
        }
    }
)

