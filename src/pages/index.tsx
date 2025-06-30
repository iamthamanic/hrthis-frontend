import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>HRthis - HR Management System</title>
        <meta name="description" content="HR Management System for Browo AI Integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            HRthis Frontend
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Deployment erfolgreich!
            </h2>
            <p className="text-gray-600 mb-6">
              Das HRthis Frontend läuft jetzt auf Render.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Backend API
                </h3>
                <p className="text-blue-600">
                  {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8002'}
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Status
                </h3>
                <p className="text-green-600">
                  ✅ Frontend läuft
                </p>
              </div>
            </div>

            <Link href="/hr/app">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                🏢 HR App öffnen
              </button>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Features:</p>
            <ul className="mt-2 space-y-1">
              <li>✅ Mitarbeiter-Management</li>
              <li>✅ Dashboard mit Statistiken</li>
              <li>✅ Employee Cards</li>
              <li>✅ Responsive Design</li>
              <li>🔄 Backend Integration</li>
              <li>🔄 Browo AI Integration</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
