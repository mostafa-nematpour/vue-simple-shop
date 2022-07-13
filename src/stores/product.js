import { defineStore } from 'pinia';
import { product as productApi } from '../api';

export const useProductStore = defineStore(
    {
        id: 'product',

        state: () => ({
            mainData: null,
            filter: {
                version: "new",
                sort: "",
                title: "",
                flash_id: "",
                max_price: "",
                min_price: "",
                available: 0,
                category_id: "",
                page: 1,
            },
            loading: false
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
            emptyFilter() {
                this.filter = {
                    version: "new",
                    sort: "",
                    title: "",
                    flash_id: "",
                    max_price: "",
                    min_price: "",
                    available: 0,
                    category_id: "",
                    page: 1,
                };
            },
            async getProductFromServer() {
                this.loading = true;
                this.mainData = await productApi.get(this.filter);
                this.loading = false;
            }
        }
    }
)

