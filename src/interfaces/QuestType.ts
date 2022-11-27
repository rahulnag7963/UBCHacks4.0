interface QuestType {
  difficulty: number
  ratio: number
  reward: number
  target: {
    donation: number
    location?: string
    cause?: string
  }

  id: number
  complete: boolean
}

export default QuestType
