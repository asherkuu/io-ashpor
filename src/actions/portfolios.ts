import useSWR from "swr";
import { fetcher, useApiHandler, useSwrHandler } from ".";

export const useGetPortfolioList = () => useSwrHandler("/portfolios");
export const useGetPortfolioById = (id: string) =>
  useSwrHandler(`/portfolios/${id}`);
