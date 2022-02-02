import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "components/layouts/Article";
import { Title } from "components/work";
import Viewer from "components/viewer";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { useGetPortfolioById } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";
import { Container, Badge } from "@chakra-ui/layout";
interface WorkDetailProps {
  param: string;
}

const Index: NextPage<WorkDetailProps> = ({ param }) => {
  const { t } = useTranslation("common");
  const { data, loading }: { data: IPortfolio; loading: boolean } =
    useGetPortfolioById(param);

  return (
    <Layout title={data && data.title}>
      <Container>
        {loading && !data ? (
          <span>Loading...</span>
        ) : (
          <>
            {data && (
              <>
                <Title>
                  {data.title}
                  <Badge>
                    {data.jobTitle === "toy" ? (
                      <>{t("Work.toy")}</>
                    ) : (
                      <>{t("Work.working")}</>
                    )}
                  </Badge>
                </Title>
                <Viewer contents={data.content} />
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{
  locale: string;
  param: string;
}> = async ({ locale, query }) => {
  return {
    props: {
      param: query.id.toString(),
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Index;
