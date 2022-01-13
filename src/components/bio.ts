import styled from '@emotion/styled'

export const BioSection = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-left: 3.4em;
  text-indent: -3.4em; */
`

export const BioYear = styled.span`
  display: flex;
  flex-direction: row;
  & > span:first-of-type {
    width: 50px;
    font-weight: bold;
  }

  & > span:last-of-type {
    width: 50px;
    font-weight: bold;
    margin-left: 5px;
  }
  /* min-width: 400px;
  font-weight: bold;
  margin-right: 1em; */
`
