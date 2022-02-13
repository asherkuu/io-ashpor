import React, { FC } from "react";
import { NextPage } from "next";
import NextLink from "next/link";
import { Container, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { WorksLoader } from "components/shares/Loader";
import Layout from "components/layouts/Article";
import Section from "components/common/section";
import { WorkGridItem } from "components/common/grid-item";

import { useGetPortfolioList } from "actions/portfolios";
import IPortfolio from "interfaces/portfolio";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface ListItemProps {
  data: IPortfolio[];
  locale: string;
}

const ListItem: FC<ListItemProps> = ({ data, locale }) => {
  return (
    <>
      {data &&
        data?.map((item) => (
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
};

const Works: NextPage<{ locale: string }> = ({ locale }) => {
  const router = useRouter();
  const { data, loading }: { data: IPortfolio[]; loading: boolean } =
    useGetPortfolioList();

  return (
    <Layout title="Works">
      <Container>
        <Heading
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          as="h3"
          fontSize={20}
          mb={4}
        >
          Works
          <NextLink href="/admin/new">
            <Button colorScheme="teal" variant="ghost" ml={5} width={15}>
              <EditIcon />
            </Button>
          </NextLink>
        </Heading>

        {loading && !data ? (
          <WorksLoader />
        ) : (
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {data && <ListItem data={data} locale={locale} />}
          </SimpleGrid>
        )}
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Works;
