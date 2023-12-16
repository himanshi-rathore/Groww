// cartStore.js
import {create} from 'zustand';

const useCartStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
      const responseData = await response.json();
      const products = responseData?.products || [];
      set({ data: products });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useCartStore;
