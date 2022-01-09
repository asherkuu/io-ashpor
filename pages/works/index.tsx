import React, { FC } from "react";
import { NextPage } from "next";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import { WorksLoader } from "components/shares/Loader";
import Layout from "components/layouts/Article";
import Section from "components/section";
import { WorkGridItem } from "components/grid-item";

import { useGetPortfolioList } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";

interface ListItemProps {
  data: IPortfolio[];
}

const ListItem: FC<ListItemProps> = React.memo(({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <Section key={item._id} delay={0.1}>
          <WorkGridItem
            id={item._id}
            title={item.title}
            thumbnail={item.img.location}
          >
            {item.description}
          </WorkGridItem>
        </Section>
      ))}
    </>
  );
});

const Works: NextPage = () => {
  const { data, loading }: { data: IPortfolio[]; loading: boolean } =
    useGetPortfolioList();

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        {loading && !data ? (
          <WorksLoader />
        ) : (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {data && <ListItem data={data} />}
          </SimpleGrid>
        )}
      </Container>
    </Layout>
  );
};

export default Works;
