import styled from 'styled-components';

interface CommonInputProps {
    placeholder?: string;
}

export const CommonInput: React.FC<CommonInputProps> = ({ placeholder = "入力してください" }) => {
    return (
        <CustomInput type="text" placeholder={placeholder} />
    );
}

const CustomInput = styled.input`
    padding :8px;
    border: solid #ddd 2px;
    border-radius: 999px;
`;
