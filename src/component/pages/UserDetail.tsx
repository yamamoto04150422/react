import { useNavigate, useParams } from "react-router-dom";
import { UserType } from "../../type/UserType";
import { CommonButton } from "../atoms/CommonButton";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { Callback } from "./Callback";

type Props = {
    user?: UserType;
}

export const UserDetail:React.FC<Props> = ({user}) => {
    const navigate = useNavigate();
    const onClickBack = () => {
        navigate(-1); // 1つ前のページに戻る
    };
    const {userId}  = useParams();

    const [open, setOpen] = useState<boolean>(false);

    const onOpen = () => {
        setOpen(prev => !prev)
    }

    const onClose = useCallback(() => {
        setOpen(prev => !prev)
    },[])

    const [text, setText] = useState<string>("");

    const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

    
    return (
        <>
            <SUserDetail>
                <p>{userId}さんの詳細情報</p>
                <CommonButton onClick={onClickBack}>ユーザ一覧に戻る</CommonButton>
            </SUserDetail>
            <SUserDetail>
                <p>memo化を行って関連しないコンポーネントによって再レンダリングされるのを防ぐ</p>
                <p>本来はinputが入力されると再レンダリングされ、関連のないtoggleを見るため</p>
                <input type="text" onChange={onchangeText} />
                <br />
                <CommonButton onClick={onOpen}>callBack検証でtoggleの箇所が重くしてます</CommonButton>
                <br />
                <Callback open={open}  onClose={onClose} />
            </SUserDetail>
        </>
    )
}
const SUserDetail = styled.div`
    text-align: center;
    padding: 24px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* 影を付ける */
    border: 1px solid #ccc;
    max-width: 600px; /* 最大幅を設定 */
    margin: 0 auto; /* 中央寄せ */
    border-radius: 50px;
    margin-top: 20px; /* 上部の余白を追加 */
`;