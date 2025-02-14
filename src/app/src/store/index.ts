import { create } from 'zustand';
import { Billboard as BillboardType } from '../types';

interface BillboardStore {
    billboard: BillboardType | null;
    setBillboard: (billboard: BillboardType) => void;
}

export const useBillboardStore = create<BillboardStore>((set) => ({
    billboard: null,
    setBillboard: (billboard) => set({ billboard }),
}));


interface BillboardModalStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const useBillboardModalStore = create<BillboardModalStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
}));


useBillboardStore.subscribe(() => {
  useBillboardModalStore.setState({
    isOpen: true
  });
});

