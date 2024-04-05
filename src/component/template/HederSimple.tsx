import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
}

export const HeaderSimple:React.FC<Props> = () => {

    return (
        <>
            <SHeader>
                <SLink to="/">HOME</SLink>
                <SLink to="/users">USERS</SLink>
            </SHeader>
        </>
    )
};

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px;
`
const SLink = styled(Link)`
    margin: 0 8px;
`