interface QuestType {
  difficulty: number
  target: {
    donation: number
    location?: string
    cause?: string
  }
}

export default QuestType
