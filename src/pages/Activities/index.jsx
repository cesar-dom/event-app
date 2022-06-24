import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Video } from "../../components/Video";

import * as S from './style'


export function Activities() {
    return (
        <S.Page>
            <Header />
            <S.Main>
                <Video />
                <Sidebar />
            </S.Main>
        </S.Page>
    )
}