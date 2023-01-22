import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=0&to=3122577232`
    );
    const graphData = res.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: p,
      };
    });
    set({ graphData });
  },
}));

export default showStore;
