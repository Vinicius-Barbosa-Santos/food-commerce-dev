import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    flex: 1;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    > img {
      width: 10rem;
      margin-bottom: 2rem;
    } 
  }

  @media(max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;

    align-items: center;
    justify-content: center;

    > section {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`
