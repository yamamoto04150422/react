import styled from "styled-components"
import { UserType } from "../../type/UserType"
import { CommonButton } from "../atoms/CommonButton";
import { useNavigate } from 'react-router-dom';

type Props = {
    user: UserType;
}

export const Card: React.FC<Props> = ({user}) => {
    
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/users/${user.name}`); // '/users/:userName'に遷移
    };
    
    return (
        <Aa>
            <DL>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>mail</dt>
                <dd>{user.email}</dd>
                <dt>Tel</dt>
                <dd>{user.tell}</dd>
                <dt>WEB</dt>
                <dd>{user.website}</dd>
            </DL>
            <CommonButton onClick={onClick}>詳細ボタン</CommonButton>
        </Aa>
    )
}

const DL = styled.dl`
    text-align: left;
    margin-bottom: 0px;
    dt{
        float: left;
    }
    dd {
        padding-reft: 32px;
        padding-bottom: 8px;
    }
`

const Aa = styled.div`
    background-color: #fff;
    box-shadow: #ddd 0px 0px 14px 2px;
    border-radius: 9px;
    padding: 16px;
`