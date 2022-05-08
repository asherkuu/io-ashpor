import React from "react";
import NextLink from "next/link";
import {
  Link,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import { BioSection, BioYear } from "components/common/bio";

import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoVimeo,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiCss3,
  SiJquery,
  SiAmazonaws,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiMobx,
} from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import Section from "components/common/section";

const Contents = ({ t }) => {
  return (
    <React.Fragment>
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

        <Box mt="4">
          <strong>
            <span>State Management Tools</span>
          </strong>
        </Box>

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
          leftIcon={<Icon as={SiRedux} />}
        >
          Recoil
        </Button>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={SiMobx} />}
        >
          Mobx
        </Button>

        <Box mt="4">
          <strong>
            <span>Back-end</span>
          </strong>
        </Box>

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
    </React.Fragment>
  );
};

export default Contents;
