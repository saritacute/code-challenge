import {MutationCache, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useState} from 'react';

export const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onSuccess: (_data, _variables, _context, mutation) => {
            queryClient.invalidateQueries({
                queryKey: mutation.options.mutationKey
            });
        }
    }),
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
});

export const ClientProvider = ({children}: {children: React.ReactNode}) => {
    const [client] = useState(() => queryClient);
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
