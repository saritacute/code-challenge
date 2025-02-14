import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getBillboardDetails } from '../api';
import { InstructDroneResponse } from '../types';

export const useGetBillboardDetailsKey = 'getBillboardDetails';
export type ReturnTypeUseGetBillboardDetails = UseQueryResult<InstructDroneResponse>;

export const useGetBillboardDetails = (billboardId: string) => {
    return useQuery({
        queryKey: [useGetBillboardDetailsKey, billboardId],
        queryFn: () => getBillboardDetails(billboardId),
        enabled: !!billboardId
    });
};
