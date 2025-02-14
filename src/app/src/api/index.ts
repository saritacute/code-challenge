import { InstructDroneResponse } from "../types"

export const instructDrone = async (instructions: string): Promise<InstructDroneResponse> => {
  const response = await fetch(`/api/instruct-drone?instructions=${instructions}`, {
    method: "GET",
  })
  return response.json()
}

export const getBillboardDetails = async (id: string) => {
  const response = await fetch(`/api/get-billboard?id=${id}`, {
    method: "GET",
  })
  return response.json()
}
