import {Modal} from 'flowbite-react';
import {LoaderIcon, XIcon} from 'lucide-react';
import {useGetBillboardDetails} from '../hook/useGetBillboardDetails';
import {useBillboardModalStore, useBillboardStore} from '../store';

export default function BillboardModal() {
    const {isOpen, setIsOpen} = useBillboardModalStore();
    const {billboard} = useBillboardStore();
    const {
        data: billboardDetails,
        isLoading,
        isRefetching
    } = useGetBillboardDetails(billboard?.id || '');

    if (isLoading || isRefetching) {
        return <LoaderIcon className="w-4 h-4 animate-spin" />;
    }

    return (
        <Modal show={isOpen} onDoubleClick={() => setIsOpen(false)} className="transition-all">
            <Modal.Body className="h-screen flex justify-center items-center relative gap-2">
                <button className="absolute top-2 right-2" onClick={() => setIsOpen(false)}>
                    <XIcon className="w-14 h-14 text-gray-300" />
                </button>
                <div className="flex flex-row gap-2 justify-start items-start relative w-auto">
                    <div className="relative">
                        <div className="flex gap-2 absolute inset-0 bg-gray-800/30 text-xs">
                            <div className="ml-2 mt-2">
                                <p className="text-white">{billboardDetails?.id}</p>
                                <p className="text-white">
                                    Photos Taken: {billboardDetails?.photosTaken}
                                </p>
                                <div className="flex gap-2">
                                    <p className="text-white">X: {billboardDetails?.x}</p>
                                    <p className="text-white">Y: {billboardDetails?.y}</p>
                                </div>
                            </div>
                        </div>
                        <img
                            src={billboard?.image}
                            alt="billboard"
                            className="w-[400px] h-[200px] object-cover rounded-md shadow-md 
                            "
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-around items-start w-[240px]">
                        <div className="flex flex-col gap-2 justify-between items-start">
                            <h1 className="text-md font-semibold text-gray-800 mb-5">
                                {billboardDetails?.billboardText}
                            </h1>
                            <p className="text-sm text-gray-500">{billboardDetails?.advertiser}</p>
                        </div>
                        <p className="text-sm text-gray-500">{billboardDetails?.address}</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
