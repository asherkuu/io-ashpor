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
  IoLogoElectron,
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

import Layout from "components/layouts/article";
import Section from "components/section";
import Paragraph from "components/paragraph";
import { BioSection, BioYear } from "components/bio";

const Home: NextPage = () => (
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
            김선규 / Asher Kim
          </Heading>
          <p>Digital Craftsman ( Artist / Developer )</p>
          <List>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoCalendarClearOutline} />}
              >
                1997.12.20 / {new Date().getFullYear() - 1997 + 1} 세
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
                asher_kuu@naver.com
              </Button>
            </ListItem>
          </List>
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
            maxWidth="180px"
            display="inline-block"
            borderRadius="full"
            src="/images/asher.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Works
        </Heading>
        <Paragraph>
          Java Programing 과정을 수료한 이후 첫 1년간 Java 및 Javascript를
          이용해서 REST API 및 웹 개발을 하였고, 이후에는 React로 언어를
          변경해서 React, Node를 이용하여 웹을 개발을 해오고 있습니다. 새로운
          기술은 물론 코드의 가독성 및 최적화에 관심이 많으며 팀원들에게 내일도
          같이 일하고 싶은 개발자가 되고싶은 개발자 <strong>김선규</strong>
          입니다.
        </Paragraph>
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
            <span>Frontend</span>
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
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={SiJavascript} />}
        >
          Javascript
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
          leftIcon={<Icon as={SiTypescript} />}
        >
          Typescript
        </Button>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={SiRedux} />}
        >
          Redux
        </Button>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoReact} />}
        >
          Hooks
        </Button>
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
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={SiStyledcomponents} />}
        >
          Styled-Component
        </Button>
        <div>
          <strong>
            <span>Backend</span>
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
          SiMysql
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
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoLogoElectron} />}
        >
          Electron
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
          육군 병장 만기 전역
        </BioSection>
        <BioSection>
          <BioYear>
            <span>19.02</span>
            <span>~</span>
            <span>19.08</span>
          </BioYear>
          [NCS] 디지털컨버전스 응용 SW 개발자 양성과정 이수
        </BioSection>
        <BioSection>
          <BioYear>
            <span>19.09</span>
            <span>~</span>
            <span>20.08</span>
          </BioYear>
          (주)워터정보 재직
        </BioSection>
        <BioSection>
          <BioYear>
            <span>21.01</span>
            <span>~</span>
            <span>21.05</span>
          </BioYear>
          (주)시냇물 ENT 재직
        </BioSection>
        <BioSection>
          <BioYear>
            <span>21.09</span> <span>~</span> <span>21.11</span>
          </BioYear>
          (주)아벤트 재직
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

export default Home;
