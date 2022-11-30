import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  padding: 1rem;
  border-radius: 5px;
  margin: auto;

  p,
  h1,
  h3,
  h2,
  input,
  button {
    margin-top: 1.5rem;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 1rem;
  }
`;

export const GameOver = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NovoJogo = styled.div`
  display: flex;
  flex-direction: column;
  button {
    height: 2.5rem;
    font-size: 1.2rem;
  }
`;
export const InputButtonContainer = styled.div``;
export const AlfabetoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;
