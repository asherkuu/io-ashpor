import { NextPage } from "next";
import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoVimeo,
  IoLogoReact,
  IoLogoSass,
  IoCallOutline,
  IoCalendarClearOutline,
  IoMailOutline,
  IoFitnessSharp,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiCss3,
  SiStyledcomponents,
  SiJquery,
  SiSpring,
  SiAmazonaws,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiJavascript,
  SiEclipseide,
  SiLinux,
} from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";

import Layout from "components/layouts/Article";
import Section from "components/common/section";
import Paragraph from "components/common/paragraph";
import { BioIntro, BioSection, BioYear } from "components/common/bio";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage<{ locale: string }> = ({ locale }) => {
  const { t } = useTranslation("common");

  const getAge = () => {
    const bornAge = locale !== "ko" ? -1 : +1;
    return new Date().getFullYear() - 1997 + bornAge;
  };
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, I&apos;m a Full-stack Developer !
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t("name")}
            </Heading>
            <Box m="15px 0 20px 0">
              <List>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoFitnessSharp} />}
                  >
                    South of Korea
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoCalendarClearOutline} />}
                  >
                    1997.12.20 / {getAge()} {t("age")}
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoCallOutline} />}
                  >
                    010-3948-2031
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={IoMailOutline} />}
                  >
                    kyuseon39@gmail.com
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
              borderRadius="full"
              src="/images/asher.png"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Intro
          </Heading>
          <Paragraph>{t("Intro")}</Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <div>
            <strong>
              <span>Front-end</span>
            </strong>
          </div>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoReact} />}
          >
            React
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiNextdotjs} />}
          >
            NextJs
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoReact} />}
          >
            React Native
          </Button>
          {/* <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiJavascript} />}
          >
            Javascript
          </Button> */}
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiTypescript} />}
          >
            Typescript
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiJquery} />}
          >
            jQuery
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiRedux} />}
          >
            Redux
          </Button>
          {/* <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoReact} />}
          >
            Hooks
          </Button> */}
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiCss3} />}
          >
            CSS
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoSass} />}
          >
            SASS
          </Button>
          {/* <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiStyledcomponents} />}
          >
            Styled-Component
          </Button> */}
          <div>
            <strong>
              <span>Back-end</span>
            </strong>
          </div>

          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiAmazonaws} />}
          >
            AWS
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiNodedotjs} />}
          >
            NodeJs
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiSpring} />}
          >
            Spring
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiEclipseide} />}
          >
            Egov
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiMongodb} />}
          >
            MongoDB
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiMysql} />}
          >
            MySql
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiOracle} />}
          >
            Oracle
          </Button>

          <div>
            <strong>
              <span>Else</span>
            </strong>
          </div>

          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoGithub} />}
          >
            GitHub
          </Button>
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={SiLinux} />}
          >
            Linux
          </Button>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              <span>16.12</span>
              <span>~</span>
              <span>18.09</span>
            </BioYear>
            {t("Bio.army")}
          </BioSection>
          <BioSection>
            <BioYear>
              <span>19.02</span>
              <span>~</span>
              <span>19.08</span>
            </BioYear>
            {t("Bio.study")}
          </BioSection>
          <BioSection>
            <BioYear>
              <span>19.09</span>
              <span>~</span>
              <span>20.08</span>
            </BioYear>
            {t("Bio.waterInfo")}
          </BioSection>
          <BioSection>
            <BioYear>
              <span>21.01</span>
              <span>~</span>
              <span>21.05</span>
            </BioYear>
            {t("Bio.sinaetmul")}
          </BioSection>
          <BioSection>
            <BioYear>
              <span>21.09</span> <span>~</span> <span>21.11</span>
            </BioYear>
            {t("Bio.abent")}
          </BioSection>
          <BioSection>
            <BioYear>
              <span>21.12</span> <span>~</span> <span>{t("now")}</span>
            </BioYear>
            {t("Bio.bss")}
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On The Web / Info
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/asherkuu" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @asherkuu
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://instagram.com/_8sher" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @_8sher
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://velog.io/@ashekruu/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoVimeo} />}
                >
                  asherkuu.log
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://codesandbox.io/search?query=kyuseon39&page=1&configure%5BhitsPerPage%5D=12"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FiCodesandbox} />}
                >
                  kyuseon39
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default Home;
