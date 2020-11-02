import React, { Children } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled.button<{
    color?: string,
    colorHover?: string,
    width?: number,
    height?: number,
}>
`  
    max-width: 100%;
    background-color: ${props => props.color};
    width: ${props => props.width}px;
    heigth: ${props => props.height}px;
    object-fit: cover;
    margin-bottom : 10px;
    outline: none;
    border: none;
    &:hover{
        background-color: ${props => props.colorHover};
    }
`;

interface InnerLinkButtonProps {
  link: string;
  color?: string;
  colorHover?: string;
  width?: number;
  height?: number;
  children?: JSX.Element[] | JSX.Element;
}


function InnerLinkButton({ link, color, colorHover, width, height, children }: InnerLinkButtonProps) {
  return (
    <Link to={link}>
      <LinkButton color={color} colorHover={colorHover} width={width} height={height}>
        {children}
      </LinkButton>
    </Link>
  );
}

export default InnerLinkButton;
