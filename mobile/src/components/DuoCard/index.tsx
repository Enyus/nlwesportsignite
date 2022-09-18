import { TouchableOpacity, View } from 'react-native'
import { GameControler } from 'phosphor-react-native'

import { styles } from './styles'
import DuoInfo from '../DuoInfo'
import { THEME } from '../../theme'

export interface DuoCardProps {
    hourEnd: string,
    hourStart: string,
    id: string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearPlaying: number
}

interface Props {
    data: DuoCardProps;
}

export default function DuoCard({ data }: Props) {
    return (
        <View style={styles.container}>
            <DuoInfo
                label='Nome'
                value={data.name}
            />
            <DuoInfo
                label='Tempo de Jogo'
                value={`${data.yearPlaying} anos`}
            />
            <DuoInfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DuoInfo
                label='Chamada de Áudio'
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity/>
        </View>
    )
}