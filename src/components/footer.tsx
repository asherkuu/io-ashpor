import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; 2021 Made By Asher Kim. All Rights Reserved.
      </Box>
      {/* <Box align="center" opacity={0.4} fontSize="sm">
        Insfired By
        <Link href="https://instagram.com/craftzdog" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoInstagram} />}
          >
            @craftzdog
          </Button>
        </Link>
      </Box> */}
    </>
  );
};

export default Footer;
