import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp, XIcon} from 'lucide-react';
import {useQueryState} from 'nuqs';
import {Notes} from './Notes';

const icons = {
    x: <XIcon className="w-4 h-4" />,
    '>': <ArrowRight className="w-4 h-4" />,
    v: <ArrowDown className="w-4 h-4" />,
    '^': <ArrowUp className="w-4 h-4" />,
    '<': <ArrowLeft className="w-4 h-4" />
};

export default function Monitor() {
    const [directions] = useQueryState('directions');

    return (
        <div className="flex flex-row flex-wrap min-h-[30px] w-full gap-1 items-center justify-center bg-white rounded-md p-2 text-slate-700">
            {!directions ? (
                <Notes />
            ) : (
                directions
                    ?.split('')
                    .map((direction) => icons[direction as keyof typeof icons] || null)
            )}
        </div>
    );
}
