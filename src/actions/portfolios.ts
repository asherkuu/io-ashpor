import useSWR from "swr";
import { fetcher, useApiHandler, useSwrHandler } from ".";

export const useGetPortfolioList = () => {
  // const { data, error, ...rest } = useSWR(`/api/v1/portfolios`, fetcher, {
  //   onErrorRetry: (error) => {
  //     if (error.status === 401) return false;
  //   },
  // });

  // return { data, error, loading: !error && !data, ...rest };
  return useSwrHandler("/portfolios");
};
