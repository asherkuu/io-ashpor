import axios from "axios";
import { useApiHandler, useSwrHandler } from ".";

export const newPortfolio = async (data) => {
  await axios.post("/api/v1/portfolios/upload", data);
};

export const useGetPortfolioList = () => useSwrHandler("/portfolios");
export const useGetPortfolioById = (id: string) =>
  useSwrHandler(`/portfolios/${id}`);

export const postPortfolios = () => useApiHandler(newPortfolio);
