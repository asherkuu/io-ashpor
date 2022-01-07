import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Badge } from "@chakra-ui/react";

import Layout from "components/layouts/article";
import Viewer from "components/viewer";
import { Title } from "components/work";

import { useGetPortfolioById } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";

const WorkDetail: NextPage<{ param: string }> = ({ param }) => {
  const { data, loading }: { data: IPortfolio; loading: boolean } =
    useGetPortfolioById(param);

  return (
    <Layout title={data && data.title}>
      <Container>
        {loading && !data ? (
          <span>Loading...</span>
        ) : (
          <>
            <Title>
              {data.title}
              <Badge>
                {data.jobTitle === "toy" ? "토이 프로젝트" : "실무 프로젝트"}
              </Badge>
            </Title>
            <Viewer contents={data.content} />
          </>
        )}
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{ param: string }> = async (
  ctx
) => {
  return { props: { param: ctx.query.id.toString() } };
};

export default WorkDetail;
