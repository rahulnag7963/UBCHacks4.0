interface Quest {
  difficulty: number
  complete: boolean
  target: {
    donation: number
    location: string
    cause: string
  }
}

export default Quest
