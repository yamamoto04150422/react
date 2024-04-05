import styled from "styled-components"
import { CommonButton } from "../atoms/CommonButton"
import { CommonInput } from "../atoms/CommonInput"

export const SearchInput = () => {
    return (
        <SerchConteiner>
            <CommonInput />
            <CommonButton >検索</CommonButton>
        </SerchConteiner>
    )
}

const SerchConteiner = styled.div`
    display: flex;
    align-items: center;
`