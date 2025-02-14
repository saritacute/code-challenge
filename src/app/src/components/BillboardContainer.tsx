import {LoaderIcon} from 'lucide-react';
import {useQueryState} from 'nuqs';
import {useInstructDrone} from '../hook/useInstructDrone';
import Billboard from './Billboard';

export default function BillboardContainer() {
    const [directions] = useQueryState('directions', {defaultValue: ''});
    const {data, isLoading, isRefetching} = useInstructDrone(directions);

    if (isLoading || isRefetching) {
        return <LoaderIcon className="w-4 h-4 animate-spin" />;
    }

    if (data?.billboards) {
        return (
            <div className="flex flex-row flex-wrap gap-5 items-start justify-around w-full p-2 rounded-md">
                {data.billboards.map((billboard) => (
                    <Billboard billboard={billboard} key={billboard.id} />
                ))}
            </div>
        );
    }
}
