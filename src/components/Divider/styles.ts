import styled from "styled-components";

export const Partial = styled.div`
  max-width: 1260px;
  width: 100%;

  margin: 0px auto;
`;

export const Full = styled.div`
  width: 100%;
`;

export const DividerBig_FULL = styled(Full)`
  height: 0px;

  border: 3px solid #0093ff;
`;

export const DividerSmall_FULL = styled(Full)`
  height: 0px;

  border: 1px solid #404756;
`;

export const DividerBig_PARTIAL = styled(Partial)`
  height: 0px;

  border: 3px solid #0093ff;
`;

export const DividerSmall_PARTIAL = styled(Partial)`
  height: 0px;

  border: 1px solid #404756;
`;
