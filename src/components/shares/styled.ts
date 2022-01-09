import styled from "@emotion/styled";

export const WorksSkeletonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const WorksSkeletonItem = styled.div`
  width: 48%;

  .sk-image {
    border-radius: 6px;
  }

  .sk-title {
    margin-top: 15px;
    margin-bottom: 6px;
  }

  .sk-desc {
    margin-top: 6px;
  }
`;
