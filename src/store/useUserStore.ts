import { create } from 'zustand';

type UserRole = 'auditor' | 'admin';

interface UserData {
  name: string;
  setName: (name: string) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
}

const useUserStore = create<UserData>((set) => ({
  name: '擅瑜伽',
  setName: (name) => set(() => ({ name: name })),
  role: 'auditor',
  setRole: (role: UserRole) => set(() => ({ role: role })),
}));

export default useUserStore;
