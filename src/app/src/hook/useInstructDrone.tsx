import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {instructDrone} from '../api';
import {InstructDroneResponse} from '../types';

export const useInstructDroneKey = 'instructDrone';
export type ReturnTypeUseInstructDrone = UseQueryResult<InstructDroneResponse>;

export const useInstructDrone = (directions: string) => {
    return useQuery({
        queryKey: [useInstructDroneKey],
        queryFn: () => instructDrone(directions),
        enabled: false
    });
};
