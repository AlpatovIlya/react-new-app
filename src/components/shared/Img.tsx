import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  size?: number;
  alt?: string;
  ariaHidden?: boolean;
};

type PropsStyle = {
  size: number;
};

export const Img: React.FC<Props> = ({
  src,
  size = 56,
  ariaHidden = false,
  alt = '',
}) => {
  return (
    <Body size={size}>
      <img src={src} alt={alt} aria-hidden={ariaHidden} />
    </Body>
  );
};

const Body = styled.div<PropsStyle>`
  position: relative;
  ::before {
    content: '';
    display: block;
    padding-bottom: ${(props) => props.size}%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
