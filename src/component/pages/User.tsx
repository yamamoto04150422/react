import styled from "styled-components"
import { SearchInput } from "../molecule/SerchInput"
import { Card } from "../template/Card"

const userData = Array.from({ length: 15 }, (_, i: number) => ({
    id:i,
    name: `yamada_${i}`,
    email: "xxx.com",
    tell: "090-xxxx-xxxx",
    website: "xxx.com",
  }));
  
type Props = {
}

export const User:React.FC<Props> = () => {
    return (
        <Scontainer>
            <h2>ユーザ一覧</h2>
            <SearchInput />
            <SUserArea>
                {userData.map((u) => (
                    <Card key={u.name} user={u} />
                ))}
            </SUserArea>
        </Scontainer>
    )
}

const Scontainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap: 20px;
`