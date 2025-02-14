import {Billboard as BillboardType} from '../types';
import Billboard from './Billboard';

export default function Billboards({billboards}: {billboards: BillboardType[]}) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center w-full">
            {billboards.map((billboard, index) => (
                <Billboard billboard={billboard} key={index} />
            ))}
        </div>
    );
}
