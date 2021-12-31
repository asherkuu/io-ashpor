import axios from "axios";
import useSWR from "swr";
import { useApiHandler, useSwrHandler } from ".";

// export const newPortfolio = async (data) => {
//   await axios.post("/api/v1/portfolios/upload", data);
// };
// export const createPortfolio = (data) => {
//   axios.post("/api/v1/portfolios", data);
// };
// export const updatePortfolio = (id, data) =>
//   axios.patch(`/api/v1/portfolios/${id}`, data);
// export const deletePortfolio = (id) => axios.delete(`/api/v1/portfolios/${id}`);

// export const useCreatePortfolio = () => useApiHandler(newPortfolio);
// export const useUpdatePortfolio = () => useApiHandler(updatePortfolio);
// export const useDeletePortfolio = () => useApiHandler(deletePortfolio);

// export const useGetPortfolio = (id) => {
//   const { data, error, ...rest } = useSWR(
//     id ? `/api/v1/portfolios/${id}` : null,
//     fetcher,
//     {
//       // no more retry maybe
//       onErrorRetry: (error) => {
//         if (error.status === 401) return false;
//       },
//     }
//   );
//   return { data, error, loading: !data && !error, ...rest };
// };

const fetcher = (url) => {
  fetch(url)
    .then(async (res) => {
      return await res.json();
    })
    .catch((e) => {
      return Promise.reject(e);
    });
};
export const useGetPortfolioList = () => {
  // return useSwrHandler("/portfolios");
  const { data, error, ...rest } = useSWR(`/api/v1/portfolios`, fetcher, {
    onErrorRetry: (error) => {
      if (error.status === 401) return false;
    },
  });

  return { data, error, loading: !error && !data, ...rest };
};
