import React from 'react';
import styled, { keyframes, DefaultTheme } from 'styled-components';

const shimmerAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

interface ShimmerWrapperProps {
  theme: DefaultTheme;
}

const ShimmerWrapper = styled.div<ShimmerWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.large};
  justify-items: center;
`;

const ShimmerCard = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(90deg, #f6f7f8 0%, #eaeaea 50%, #f6f7f8 100%);
  background-size: 200px 100%;
  animation: ${shimmerAnimation} 1.5s infinite;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 300px;
  aspect-ratio: 3/4;
`;

interface ShimmerProps {
  count?: number;
}

const Shimmer: React.FC<ShimmerProps> = ({ count = 8 }) => (
  <ShimmerWrapper>
    {Array.from({ length: count }, (_, index) => (
      <ShimmerCard key={index} />
    ))}
  </ShimmerWrapper>
);

export default Shimmer;
