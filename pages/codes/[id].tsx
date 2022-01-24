import React from "react";
import { GetServerSideProps, NextPage } from "next";

import ReactVac from "components/codes/ReactVac";

interface CodeProps {
  param: string;
}

const Index: NextPage<CodeProps> = ({ param }) => {
  const render = { reactVac: { id: 1, render: <ReactVac /> } };

  return <div>{render.render}</div>;
};

export const getServerSideProps: GetServerSideProps<{ param: string }> = async (
  ctx
) => {
  return { props: { param: ctx.query.id.toString() } };
};

export default Index;
