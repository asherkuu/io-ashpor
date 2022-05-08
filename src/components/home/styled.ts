import styled from "@emotion/styled";
import Image from "next/image";

export const Skills = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
  }
`;
export const ProfileImage = styled(Image)`
  border-radius: 999px !important;
  border: 2px solid var(--chakra-colors-teal-200) !important;
`;
