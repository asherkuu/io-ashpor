import styled from "@emotion/styled";

export const FormInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > div {
      width: 49%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .date-picker {
    -webkit-padding-end: 2rem;
    padding-inline-end: 2rem;
    width: 100%;
    min-width: 0px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    transition-property: var(--chakra-transition-property-common);
    transition-duration: var(--chakra-transition-duration-normal);
    background: inherit;
    padding-bottom: 1px;
    line-height: var(--chakra-lineHeights-normal);
    font-size: var(--chakra-fontSizes-md);
    -webkit-padding-start: var(--chakra-space-4);
    padding-inline-start: var(--chakra-space-4);
    height: var(--chakra-sizes-10);
    border-radius: var(--chakra-radii-md);
    border: 1px solid;
    border-color: inherit;
  }
`;
