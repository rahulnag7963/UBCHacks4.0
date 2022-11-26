import Charity from "../interfaces/Charity"
import Location from "../interfaces/Location"
import QuestType from "../interfaces/QuestType"

const MIN_DIFFICULTY = 0.5
const MAX_DIFFICULTY = 2.5

const STANDARD_REWARD = 200
const STANDARD_DONATION_GOAL = 100

let locations: Location[] = []
let charities: Charity[] = []

const setLocations = (arr: Location[]) => locations = [...arr]
const setCharities =  (arr: Charity[]) => charities = [...arr]

const get = () => {
  const difficulty = Math.random() * (MAX_DIFFICULTY - MIN_DIFFICULTY) + MIN_DIFFICULTY
  const reward = STANDARD_REWARD * difficulty - (Math.random() * difficulty * 15)
  const donation = STANDARD_DONATION_GOAL * difficulty + (Math.random() * difficulty * 15)

  let requireLocation = Math.random() >= 0.5
  let requireCause = Math.random() >= 0.5

  if (requireLocation && requireCause) {
    if (Math.random() >= 0.5) requireLocation = false
    if (Math.random() >= 0.5) requireCause = false
  }

  const location = locations[Math.floor(Math.random() * locations.length)]
  const charity = charities[Math.floor(Math.random() * charities.length)]

  return {
    difficulty: Math.round(difficulty),
    reward: Math.round(reward),
    target: {
      donation: Math.round(donation),
      location: requireLocation ? location : undefined,
      cause: requireCause ? charity : undefined,
    },
  } as QuestType
}

const getMany = (n: number) => {
  const arr = [] as QuestType[]
  for (let i = 0; i < n; i++) arr.push(get())
  return arr
}

const QuestGenerator = {
  setLocations, setCharities, get, getMany
}

export default QuestGenerator
