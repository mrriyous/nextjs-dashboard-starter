import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
//   const revenue = await fetchRevenue();
//   const latestInvoices = await fetchLatestInvoices();
  const numberOfCustomers = 10;
  const numberOfInvoices = 25;
  const totalPaidInvoices = 5000;
  const totalPendingInvoices = 2500;
  
  return (
    <main className="p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      
      {/* Card Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Suspense fallback={<CardsSkeleton />}>
          <Card title="Collected" value={totalPaidInvoices} type="collected" />
          <Card title="Pending" value={totalPendingInvoices} type="pending" />
          <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
          <Card title="Total Customers" value={numberOfCustomers} type="customers" />
        </Suspense>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-5">
          <div className="w-full p-6 bg-white rounded-lg shadow">
            <h2 className={`${lusitana.className} text-xl font-semibold mb-4`}>
              Recent Revenue
            </h2>
            <Suspense fallback={<RevenueChartSkeleton />}>
              {/* <RevenueChart revenue={revenue} /> */}
            </Suspense>
          </div>
        </div>

        {/* Latest Invoices */}
        <div className="lg:col-span-3">
          <div className="w-full p-6 bg-white rounded-lg shadow">
            <h2 className={`${lusitana.className} text-xl font-semibold mb-4`}>
              Latest Invoices
            </h2>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
              {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
            </Suspense>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="lg:col-span-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 p-6 bg-white rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium mb-2">Monthly Overview</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Total Revenue: $0</p>
                <p className="text-sm text-gray-600">Average Invoice: $0</p>
                <p className="text-sm text-gray-600">Active Customers: 0</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                  Create New Invoice
                </button>
                <button className="w-full px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600">
                  Add New Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
