import Location from "./Location"

interface Charity {
  name: string
  desc: string
  effect: {
    [location: Location['name']]: number
  }
}

export default Charity
