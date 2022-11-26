export type Factor = "reward" | "time" | "energy"

interface Item {
  name: string
  factor: Factor
  effect: number
}

export default Item
