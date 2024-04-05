import styled from 'styled-components';

type Props = {

}

export const Top:React.FC<Props> = () => {
    return (
        <SContainer>
            <h2>ユーザ一覧</h2>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`