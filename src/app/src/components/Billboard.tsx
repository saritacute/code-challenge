import {useBillboardStore} from '../store';
import {Billboard as BillboardType} from '../types';

export default function Billboard({billboard}: {billboard: BillboardType}) {
    const {setBillboard} = useBillboardStore();
    return (
        <img
            src={billboard?.image}
            alt="billboard"
            onClick={() => {
                setBillboard(billboard);
            }}
            className="w-[45%] h-[200px] object-cover rounded-md shadow-md cursor-pointer bg-white"
        />
    );
}
