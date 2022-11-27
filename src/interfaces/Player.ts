import Item from './Item'

interface Player {
  id: string
  name: string
  exp: number
  energy: number
  items: Item[]
}

export default Player
