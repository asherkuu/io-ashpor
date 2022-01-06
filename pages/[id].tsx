import { useGetPortfolioById, useGetPortfolioList } from "actions/portfolios";
import { GetServerSideProps } from "next";
import React from "react";

const Hello = ({ param }) => {
  // const { data, loading } = useGetPortfolioList();
  const { data, loading } = useGetPortfolioById("61a1e9e3ccfd89197d53cb83");
  console.log(data);
  console.log(loading);
  return <div>YEAT</div>;
};

export default Hello;

export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  return { props: { param: ctx.query.id.toString() } };
};
