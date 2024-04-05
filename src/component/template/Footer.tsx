import styled from "styled-components";

type Props = {
}

export const Footer:React.FC<Props> = () => {

    return (
        <SFooter>&copy; 2024/04 Create</SFooter>
    )
};

const SFooter = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`