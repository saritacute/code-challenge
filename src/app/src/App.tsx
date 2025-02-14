import {useState} from 'react';
import {instructDrone} from './api';
import Billboards from './components/Billboards';
import {droneActions, keyActions, otherActions} from './constants/key-actions';
import useOnKeyUp from './hook/useOnKeyup';
import {Billboard} from './types';
import {removeDuplicate} from './utils/remove-duplicate';

export default function App() {
    const [billboards, setBillboards] = useState<Billboard[]>([]);
    const [selectedActions, setSelectedActions] = useState<string[]>([]);

    const onSelectAction = (action: string) => {
        setSelectedActions([...selectedActions, action]);
    };

    const onDeleteAction = () => {
        const selectedActionsCopy = [...selectedActions];
        selectedActionsCopy.splice(selectedActionsCopy.length - 1, 1);
        setSelectedActions(selectedActionsCopy);
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

    const onResetAction = () => {
        setSelectedActions([]);
        setBillboards([]);
    };

    const onSubmit = async () => {
        try {
            const directions = removeDuplicate(selectedActions);
            const {billboards} = await instructDrone(directions.join(''));
            setBillboards(billboards);
        } catch (error) {
            console.error(error);
        }
    };

    useOnKeyUp(onKeyUp);

    return (
        <main className="max-w-[600px] mx-auto pt-10 px-4">
            <section className="flex flex-col items-center justify-center h-full gap-5">
                <div className="w-full h-[100px] bg-white rounded-md p-2 overflow-y-auto flex flex-row gap-2 items-center justify-center">
                    <code className="text-md font-bold text-slate-800">
                        {selectedActions.join(' ')}
                    </code>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    {Object.keys(droneActions).map((action) => (
                        <button
                            className="bg-slate-500 text-white px-4 py-2 rounded-md"
                            onClick={() => onSelectAction(action)}
                        >
                            {droneActions[action as keyof typeof droneActions]}{' '}
                            <kbd className="bg-slate-400 px-2 py-1 rounded-md">
                                {action === 'x' ? 'Space' : action}
                            </kbd>
                        </button>
                    ))}
                </div>

                <div className="flex flex-row gap-2 items-center justify-center">
                    <button
                        className="bg-slate-500 text-white px-4 py-2 rounded-md flex flex-row gap-2 items-center justify-center"
                        onClick={onDeleteAction}
                    >
                        Delete<kbd className="bg-slate-400 px-2 rounded-md">Backspace</kbd>
                    </button>
                    <button
                        className="bg-slate-500 text-white px-4 py-2 rounded-md flex flex-row gap-2 items-center justify-center"
                        onClick={onResetAction}
                    >
                        Reset<kbd className="bg-slate-400 px-2 rounded-md">Esc</kbd>
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={onSubmit}
                    >
                        Submit
                    </button>
                </div>
                <Billboards billboards={billboards} />
            </section>
        </main>
    );
}
