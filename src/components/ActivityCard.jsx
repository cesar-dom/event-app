import { CheckCircle } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'



export function ActivityCard(props) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    //Terça • 22 de junho • 19h00

    return (
        <S.ActivityCard href="#">
            <S.CardDate style={{ textTransform: 'capitalize' }}>
                {availableDateFormatted}
            </S.CardDate>

            <S.CardContent>
                <S.CardHeader>

                    {isLessonAvailable ? (
                        <S.CardStatusAvailable>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </S.CardStatusAvailable>
                    ) :
                        (
                            <S.CardStatusNotAvailable>
                                <CheckCircle size={20} />
                                Em Breve
                            </S.CardStatusNotAvailable>
                        )}

                    <S.CardType>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </S.CardType>

                </S.CardHeader>
                <S.CardTitle>
                    {props.title}
                </S.CardTitle>
            </S.CardContent>
        </S.ActivityCard>
    )
}