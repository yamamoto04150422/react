import { ReactNode } from "react";
import { Header } from "../template/Heder";
import { Footer } from "../template/Footer";

type Props = {
    children:ReactNode;
}

export const DefaultLayout:React.FC<Props> = ({children}) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
};