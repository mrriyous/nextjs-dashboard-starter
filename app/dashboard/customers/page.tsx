import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function CustomersPage() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl md:text-2xl">Customers</h1>
      <div className="grid gap-6">
        {/* Customer content will go here */}
      </div>
    </main>
  );
} 