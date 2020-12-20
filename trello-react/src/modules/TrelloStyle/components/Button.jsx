/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};

      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${(props) => props.outline && css`
        color: ${selected};
        background: none;
        border: 1px solid ${selected};
        &:hover {
          background: ${selected};
          color: #fff;
        }
      `};
    `;
  }}
`;
const whiteStyles = css`

  ${(props) => (props.color === 'white' ? css`
    ${props.outline ? css`
      color: #fff;
      &:hover {
        color: ${props.theme.palette[props.ftColor]}
      }
    ` : css`
      color: ${props.theme.palette[props.ftColor]};
      &:hover {
        color: #fff;
        background-color: ${props.theme.palette[props.ftColor]}
      }
    `}
  ` : null)}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};
const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;
const fullWidthStyle = css`
  ${(props) => (
    props.fullWidth ? css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    ` : null
  )}
`;

const styles = css`
  /* common styles */
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  line-height: normal;
  transition: all 0.2s;

  /* size */
  ${sizeStyles}
  ${fullWidthStyle}

  /* color */
  ${colorStyles}
  ${whiteStyles}

  /* etc */
  & + & {
    margin-left: 1rem;
  }
`;

const StyledButton = styled.div`
  ${styles}
`;
const StyledLinkButton = styled(Link)`
  ${styles}
`;

export function Button({
  children, color, size, outline, fullWidth, ...rest
}) {
  return (
    <StyledButton
      as="button"
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export function LinkButton({
  children, color, size, outline, fullWidth, ...rest
}) {
  return (
    <StyledLinkButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledLinkButton>
  );
}

const defaultProps = {
  color: 'main',
  size: 'medium',
};
Button.defaultProps = defaultProps;
LinkButton.defaultProps = defaultProps;
