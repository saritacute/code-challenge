import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Camera} from 'lucide-react';
import {useQueryState} from 'nuqs';
import {useEffect} from 'react';
import {toast} from 'sonner';
import {queryClient} from '../client';
import {keyActions, otherActions} from '../constants/key-actions';
import {useInstructDrone} from '../hook/useInstructDrone';
import useOnKeyup from '../hook/useOnKeyup';
import {removeDuplicate} from '../utils/remove-duplicate';

export default function Navigator() {
    const [directions, setDirections] = useQueryState('directions', {defaultValue: ''});

    const {refetch} = useInstructDrone(directions);

    useEffect(() => {
        refetch();
    }, [refetch]);

    const onSelectAction = (action: string) => {
        setDirections(directions?.concat(action));
    };

    const onDeleteAction = () => {
        setDirections(directions?.slice(0, -1));
    };

    const onResetAction = () => {
        queryClient.resetQueries({queryKey: ['instructDrone']}).finally(() => {
            setDirections('');
        });
    };

    const onSubmitAction = () => {
        if (!directions?.includes('x')) {
            toast.error('Your directions doesnt have any captures');
            return;
        }
        const newDirections = removeDuplicate(directions?.split('') || []);
        setDirections(newDirections.join(''));
        refetch();
    };

    const onKeyUp = (event: KeyboardEvent) => {
        if (keyActions[event.key as keyof typeof keyActions]) {
            onSelectAction(keyActions[event.key as keyof typeof keyActions]);
        } else {
            switch (event.key) {
                case otherActions.Backspace:
                    onDeleteAction();
                    break;
                case otherActions.Escape:
                    onResetAction();
                    break;
                default:
                    break;
            }
        }
    };

    useOnKeyup(onKeyUp);

    return (
        <div className="flex flex-col gap-2 items-center justify-center w-full text-slate-700">
            <div className="flex flex-row gap-2 items-center justify-center w-full">
                <button
                    className="bg-gray-200 p-2 rounded-md"
                    onClick={() => onSelectAction(keyActions.ArrowUp)}
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center w-full">
                <button
                    className="bg-gray-200 p-2 rounded-md"
                    onClick={() => onSelectAction(keyActions.ArrowLeft)}
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                    className="bg-gray-200 p-2 rounded-md relative"
                    onClick={() => onSelectAction('x')}
                >
                    <Camera className="w-6 h-6" />
                </button>
                <button
                    className="bg-gray-200 p-2 rounded-md"
                    onClick={() => onSelectAction(keyActions.ArrowRight)}
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-full">
                <button
                    className="bg-gray-200 p-2 rounded-md"
                    onClick={() => onSelectAction(keyActions.ArrowDown)}
                >
                    <ArrowDown className="w-6 h-6" />
                </button>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center w-full text-sm font-semibold">
                <button
                    className="bg-gray-200 p-2 rounded-md flex flex-row gap-2 items-center justify-center"
                    onClick={onResetAction}
                >
                    Reset
                    <kbd className="bg-gray-300 text-[10px] p-1 rounded-md">Esc</kbd>
                </button>

                <button
                    className="bg-gray-200 p-2 rounded-md flex flex-row gap-2 items-center justify-center"
                    onClick={onDeleteAction}
                >
                    Delete
                    <kbd className="bg-gray-300 text-[10px] p-1 rounded-md">Backspace</kbd>
                </button>

                <button
                    className="bg-blue-200 p-2 rounded-md flex flex-row gap-2 items-center justify-center"
                    onClick={onSubmitAction}
                >
                    Get Billboards
                </button>
            </div>
        </div>
    );
}
