import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 0 15px;
  flex: 0 0 320px;
  opacity: ${({ done }) => (done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 16px;
      font-weight: 500;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border: 0;
      border-radius: 18px;
      background: #3b5bfd;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
