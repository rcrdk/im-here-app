import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type ParticipantProps = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
