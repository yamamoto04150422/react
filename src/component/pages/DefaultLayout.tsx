import { ReactNode } from "react";
import { Header } from "../template/Heder";
import { Footer } from "../template/Footer";
import HomePage from "./HomePage";

type Props = {
    children:ReactNode;
}

export const DefaultLayout:React.FC<Props> = ({children}) => {

    return (
        <>
            <Header />
            {children}
            <HomePage></HomePage>
            <Footer />
        </>
    )
};