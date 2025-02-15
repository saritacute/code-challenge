import { BillboardDetailsResponse, InstructDroneResponse } from "../types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const instructDrone = async (instructions: string): Promise<InstructDroneResponse> => {
  const response = await fetch(`/api/instruct-drone?instructions=${instructions}`, {
    method: "GET",
  })
  await delay(250)
  return response.json()
}

export const getBillboardDetails = async (id: string): Promise<BillboardDetailsResponse['billboard']> => {
  const response = await fetch(`/api/get-billboard?id=${id}`, {
    method: "GET",
  })
  const data = await response.json()
  return data?.billboard
}
