import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
    children?:ReactNode;
}

export const Header:React.FC<Props> = ({children}) => {

    return (
        <>
            <SHeader>
                <SLink to="/">HOME</SLink>
                <SLink to="/users">USERS</SLink>
            </SHeader>
            {children}
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