import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useState } from "react"

let participantsList = [
  "Gabriel Bauer",
  "Martina Neubauer",
  "Laís Gonçalves",
  "João Victor",
  "Andressa Soares",
  "André San",
  "Coquinha",
  "Tom Cruise",
  "Mitinha",
  "Calota",
  "Cinzinha",
  "Pantera",
  "Pandora",
]

export function Home() {
  const [participantName, setParticipantName] = useState("")
  const [participants, setParticipants] = useState<string[]>(participantsList)

  function handleAddParticipant(name: string) {
    const isParticipantAlreadyInList = participants.includes(name)

    if (isParticipantAlreadyInList) {
      Alert.alert(
        "Participante já adicionado",
        "Já existe um participante na lista com este nome"
      )

      return
    }

    setParticipants((state) => [...state, name])
    setParticipantName("")
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja remover o participante ${name}?`,
      [
        { text: "Manter partcipante", style: "cancel" },
        {
          text: "Remover",
          onPress: () => {
            const newList = participants.filter(
              (participant) => participant !== name
            )
            setParticipants((state) => [...newList])
          },
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          cursorColor="#FDFCFE"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddParticipant(participantName)
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleRemoveParticipant}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
