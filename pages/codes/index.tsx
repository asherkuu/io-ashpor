import React, { FC } from "react";
import { NextPage } from "next";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import Layout from "components/layouts/Article";
import Section from "components/common/section";
import { GridItem } from "components/common/grid-item";

import { CODE_LIST } from "lib/code";
import ICodes from "interfaces/code";

interface ListItemProps {
  data: ICodes[];
}

const ListItem: FC<ListItemProps> = React.memo(({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <Section key={item._id} delay={0.1}>
          {/* <GridItem
            href={`/codes/${item._id}`}
            title={item.title}
            thumbnail={item.img.location}
          /> */}
        </Section>
      ))}
    </>
  );
});

const Codes: NextPage = () => {
  return (
    <Layout title="Codes">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Codes
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <ListItem data={CODE_LIST} />
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Codes;
