'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { UserCard } from '@/components/UserCard';
import useStore from '@/lib/store';

export default function Home() {
  const { products, users, fetchProducts, fetchUsers } = useStore();

  useEffect(() => {
    // Inicialmente, usa dados locais
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Revisão React - Produtos e Usuários</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Produtos</h2>
        <Button onClick={fetchProducts} className="mb-4">Buscar Produtos da API</Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Usuários</h2>
        <Button onClick={fetchUsers} className="mb-4">Buscar Usuários da API</Button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}
