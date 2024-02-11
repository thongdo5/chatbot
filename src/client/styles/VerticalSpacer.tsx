import styled from 'styled-components';

export interface VerticalSpacerProps {
  size: string;
}

const VerticalSpacer = styled.div<VerticalSpacerProps>`
  margin-bottom: ${({ size }) => size};
`;

export default VerticalSpacer;
