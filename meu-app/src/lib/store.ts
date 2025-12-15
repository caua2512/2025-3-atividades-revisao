import { create } from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface Store {
  products: Product[];
  users: User[];
  setProducts: (products: Product[]) => void;
  setUsers: (users: User[]) => void;
  fetchProducts: () => Promise<void>;
  fetchUsers: () => Promise<void>;
}

const useStore = create<Store>((set) => ({
  products: [
    { id: 1, title: 'Produto 1', price: 10.99, description: 'Descrição do produto 1' },
    { id: 2, title: 'Produto 2', price: 20.99, description: 'Descrição do produto 2' },
  ],
  users: [
    { id: 1, firstName: 'João', lastName: 'Silva', email: 'joao@example.com' },
    { id: 2, firstName: 'Maria', lastName: 'Santos', email: 'maria@example.com' },
  ],
  setProducts: (products) => set({ products }),
  setUsers: (users) => set({ users }),
  fetchProducts: async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      set({ products: data.products });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  },
  fetchUsers: async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      set({ users: data.users });
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  },
}));

export default useStore;