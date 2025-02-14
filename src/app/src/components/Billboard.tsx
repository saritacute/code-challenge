import {useState} from 'react';
import {getBillboardDetails} from '../api';
import {Billboard as BillboardType} from '../types';

export default function Billboard({billboard}: {billboard: BillboardType}) {
    const [billboardDetails, setBillboardDetails] = useState<BillboardType | null>(null);

    const fetchBillboardDetails = async () => {
        try {
            const {billboard: billboardDetails} = await getBillboardDetails(billboard.id);
            console.log(billboardDetails);
            setBillboardDetails(billboardDetails);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="flex flex-row gap-2 items-center justify-between w-full bg-white p-2 rounded-md">
            <img
                src={billboard?.image}
                alt="billboard"
                className="w-[150px] h-[200px] object-cover rounded-md shadow-md cursor-pointer"
            />
            <div className="flex flex-col gap-2 items-start justify-start">
                <p className="text-sm font-semibold">{billboard?.billboardText}</p>

                {!billboardDetails && (
                    <button
                        className="px-2 py-1 rounded-md underline text-xs"
                        onClick={fetchBillboardDetails}
                    >
                        See More
                    </button>
                )}

                {billboardDetails && (
                    <>
                        <p className="text-xs text-gray-700 font-semibold">
                            {billboardDetails?.advertiser}
                        </p>
                        <p className="text-xs text-gray-500">{billboardDetails?.address}</p>
                        <p className="text-xs text-gray-500">
                            Photos Taken: {billboardDetails?.photosTaken}
                        </p>
                        <p className="text-xs text-gray-500">{billboardDetails?.id}</p>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="text-xs text-gray-500">x: {billboardDetails?.x}</p>
                            <p className="text-xs text-gray-500">y: {billboardDetails?.y}</p>
                        </div>
                    </>
                )}
            </div>
            <div className="flex flex-col gap-2 items-center justify-center"></div>
        </div>
    );
}
