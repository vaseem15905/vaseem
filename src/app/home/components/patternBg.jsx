import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
   position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 0;
  pointer-events: none;
  .container {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    --color: rgba(34, 197, 94, 0.25); /* green grid */
    background-color: #191a1a;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
    background-size: 75px 75px;
  }
`;

export default Pattern;