import styled from 'styled-components'


export const GenresItem = styled.li`
    & + & {
        margin-left: 16px;
    }
    text-decoration: underline;
`

export const Overview = styled.p`
    font-weight: 500;
    font-size: 20px;
`

export const Genres = styled.p`
    font-weight: 500;
    font-size: 18px;
`