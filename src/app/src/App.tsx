import BillboardContainer from './components/BillboardContainer';
import Monitor from './components/Monitor';
import Navigator from './components/Navigator';
import useDisableArrowScroll from './hook/useDisableScroll';

export default function App() {
    useDisableArrowScroll();
    return (
        <main className="max-w-[600px] mx-auto pt-10 px-4">
            <section className="flex flex-col items-center justify-center h-full gap-5">
                <Monitor />
                <Navigator />
                <BillboardContainer />
            </section>
        </main>
    );
}
