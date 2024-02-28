import styled from 'styled-components'

export const SideBarContainer = styled.aside`
    width: 7.75vw;

    padding: 2rem 0;
    overflow: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.red};
`
