import React, { ReactNode, MouseEventHandler } from "react";
import styled from 'styled-components';

type Props = {
    children:ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const CommonButton: React.FC<Props> = ({children, onClick}) => {
    return (
        <CustomButton onClick={onClick}>{children}</CustomButton>
    )
}

const CustomButton = styled.button`
    background-color: #40514e;
    color: white;
    border-radius: 9999px;
    padding: 8px 16px;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;