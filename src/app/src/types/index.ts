export interface InstructDroneResponse {
  success: boolean
  instructions: string
  billboards: Billboard[]
}

export interface Billboard {
  id: string
  x: number
  y: number
  photosTaken: number
  advertiser: string
  address: string
  billboardText: string
  image: string
}