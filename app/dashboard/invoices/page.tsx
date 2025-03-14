import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function InvoicesPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="p-6">
      <h1 className="mb-4 text-xl md:text-2xl">Invoices</h1>
      <div className="grid gap-6">
        
      </div>
    </main>
  );
} 