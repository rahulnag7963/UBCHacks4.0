interface QuestType {
  difficulty: number
  reward: number
  target: {
    donation: number
    location?: string
    cause?: string
  }
}

export default QuestType
