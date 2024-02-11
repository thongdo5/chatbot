import React, { FC, ReactNode } from 'react';
import { Col, Row } from 'react-bootstrap';
import StyledFormLayoutContainer from './styles/StyledFormLayoutContainer';
import StyledFormLayoutWrapper from './styles/StyledFormLayoutWrapper';
import RobotImage from '@assets/robot-image.png';
import StyledRobotImage from './styles/StyledRobotImage';
import { useMediaQuery } from '@react-hook/media-query';

export interface FormLayoutProps {
  children: ReactNode;
}

const FormLayout: FC<FormLayoutProps> = ({ children }) => {
  const isLargecreen = useMediaQuery('(min-width: 1200px)');

  return (
    <Row>
      <Col xs={12} xl={4}>
        <StyledFormLayoutContainer>
          <StyledFormLayoutWrapper>{children}</StyledFormLayoutWrapper>
        </StyledFormLayoutContainer>
      </Col>
      {isLargecreen && (
        <Col xs={0} xl={8}>
          <StyledRobotImage src={RobotImage} alt='robot image' />
        </Col>
      )}
    </Row>
  );
};

export default FormLayout;
