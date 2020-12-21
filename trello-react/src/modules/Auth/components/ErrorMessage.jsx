import React from 'react';
import styled from 'styled-components';
import { BiMessageError } from 'react-icons/bi';

const ErrorMessageWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: .5em 1em;
  background: #fff;
  font-size: 14px;
  color: rgb(94, 108, 132);
  height: 44px;
  display: flex;
  align-items: center;
  transform: ${(props) => {
    const { x, y, w } = props;
    return `translate3d(${x + w + 5}px, ${y}px, 0px)`;
  }};

  & > *:first-child {
    margin-right: 5px;
  }
`;

export default function ErrorMessage(props) {
  const { children, parent } = props;

  if (!parent) return null;

  const position = parent.getBoundingClientRect();
  console.log(position);

  return (
    <ErrorMessageWrapper
      className="shadow-box"
      will-change="transform"
      x={position.x}
      y={position.y}
      w={position.width}
    >
      <BiMessageError />
      {children}
    </ErrorMessageWrapper>
  );
}
