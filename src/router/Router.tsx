import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Top } from "../component/pages/Top";
import { DefaultLayout } from "../component/pages/DefaultLayout";
import { User } from '../component/pages/User';
import { UserDetail } from '../component/pages/UserDetail';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout><Top /></DefaultLayout>} />
                <Route path="/users" element={<DefaultLayout><User /></DefaultLayout>} />
                <Route path="/users/:userId" element={<DefaultLayout><UserDetail /></DefaultLayout>} />
            </Routes>
        </BrowserRouter>
    )
}
