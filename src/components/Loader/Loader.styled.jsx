import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

export const Ellipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: teal;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-of-type(1) {
    left: 8px;
    animation: Ellipsis1 0.6s infinite;
  }
  div:nth-of-type(2) {
    left: 8px;
    animation: Ellipsis2 0.6s infinite;
  }
  div:nth-of-type(3) {
    left: 32px;
    animation: Ellipsis2 0.6s infinite;
  }
  div:nth-of-type(4) {
    left: 56px;
    animation: Ellipsis3 0.6s infinite;
  }
  @keyframes Ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes Ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes Ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
