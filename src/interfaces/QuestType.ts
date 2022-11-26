interface QuestType {
  difficulty: number
  complete: boolean
  target: {
    donation: number
    location: string
    cause: string
  }
}

export default QuestType
