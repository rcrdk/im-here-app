import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipent, setNewParticipant] = useState('')

  function handleParticipantAdd() {
    if (newParticipent === '') {
      return Alert.alert(
        'Nenhum nome informado',
        'Não foi informado um nome de participante.',
      )
    }

    if (participants.includes(newParticipent)) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante na lista com esse nome',
      )
    }

    setParticipants(prev => [newParticipent, ...prev])
    setNewParticipant('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover ${name} da lista de participantes?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () =>
            setParticipants(prev => prev.filter(item => item !== name)),
          style: 'destructive',
        },
      ],
    )
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipsing
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet
            fuga rem eius vel debitis quo velit ipsam numquam illum quos
            corporis sit neque quia.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nome do participante"
              placeholderTextColor="#6b6b6b"
              enterKeyHint="send"
              returnKeyType="send"
              keyboardType="default"
              value={newParticipent}
              onChangeText={setNewParticipant}
              onSubmitEditing={() => {
                handleParticipantAdd()
              }}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={handleParticipantAdd}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        style={styles.participants}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.participantsEmpty}>
            Nenhum participante presente ainda.
          </Text>
        )}
      />

      <SafeAreaView style={styles.container} />
    </>
  )
}
