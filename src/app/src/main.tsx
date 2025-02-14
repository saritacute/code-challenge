import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {NuqsAdapter} from 'nuqs/adapters/react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ClientProvider} from './client/index.tsx';
import BillboardModal from './components/BillboardModal.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <NuqsAdapter>
            <ClientProvider>
                <App />
                <ReactQueryDevtools initialIsOpen={false} />
                <BillboardModal />
            </ClientProvider>
        </NuqsAdapter>
    </StrictMode>
);
