import React, { useState } from 'react';
import Head from 'next/head';

// Mock Data
const mockEmployees = [
  {
    id: '1',
    employeeNumber: 'EMP001',
    firstName: 'Max',
    lastName: 'Mustermann',
    email: 'max.mustermann@hrthis.de',
    phone: '+49 30 12345678',
    position: 'Senior Developer',
    department: 'IT',
    status: 'ACTIVE',
    startDate: '2023-01-15',
    employmentType: 'Vollzeit'
  },
  {
    id: '2',
    employeeNumber: 'EMP002',
    firstName: 'Anna',
    lastName: 'Schmidt',
    email: 'anna.schmidt@hrthis.de',
    phone: '+49 30 87654321',
    position: 'HR Manager',
    department: 'Human Resources',
    status: 'ACTIVE',
    startDate: '2022-03-10',
    employmentType: 'Vollzeit'
  },
  {
    id: '3',
    employeeNumber: 'INT001',
    firstName: 'Julia',
    lastName: 'Weber',
    email: 'julia.weber@hrthis.de',
    phone: '+49 30 11111111',
    position: 'Marketing Praktikantin',
    department: 'Marketing',
    status: 'PROBATION',
    startDate: '2024-01-15',
    employmentType: 'Praktikant'
  }
];

export default function HRApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [employees] = useState(mockEmployees);

  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyle = (status: string) => {
      switch (status) {
        case 'ACTIVE':
          return 'bg-green-100 text-green-800';
        case 'PROBATION':
          return 'bg-yellow-100 text-yellow-800';
        case 'INACTIVE':
          return 'bg-gray-100 text-gray-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(status)}`}>
        {status === 'ACTIVE' ? 'Aktiv' : status === 'PROBATION' ? 'Probezeit' : 'Inaktiv'}
      </span>
    );
  };

  const EmployeeCard = ({ employee }: { employee: any }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {employee.firstName[0]}{employee.lastName[0]}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-sm text-gray-500">#{employee.employeeNumber}</p>
          </div>
        </div>
        <StatusBadge status={employee.status} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="w-4 h-4">📧</span>
          <span>{employee.email}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="w-4 h-4">📞</span>
          <span>{employee.phone}</span>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Position:</span>
            <span className="font-medium">{employee.position}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Abteilung:</span>
            <span className="font-medium">{employee.department}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Beschäftigungsart:</span>
            <span className="font-medium">{employee.employmentType}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Eintritt:</span>
            <span className="font-medium">
              {new Date(employee.startDate).toLocaleDateString('de-DE')}
            </span>
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-2 border-t">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Bearbeiten
          </button>
          <button className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors">
            Löschen
          </button>
        </div>
      </div>
    </div>
  );

  const DashboardTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👥</span>
              </div>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Mitarbeiter</p>
              <p className="text-2xl font-semibold text-gray-900">{employees.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✅</span>
              </div>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Offene Anträge</p>
              <p className="text-2xl font-semibold text-gray-900">7</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Überstunden</p>
              <p className="text-2xl font-semibold text-gray-900">142h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-gray-500">Spesen</p>
              <p className="text-2xl font-semibold text-gray-900">€2,345</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Letzte Aktivitäten</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">👤</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Max Mustermann hat einen Urlaubsantrag eingereicht
                </p>
                <p className="text-sm text-gray-500">Vor 2 Stunden</p>
              </div>
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                Bearbeiten
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Spesenabrechnung wurde genehmigt
                </p>
                <p className="text-sm text-gray-500">Vor 4 Stunden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EmployeesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Mitarbeiter</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Mitarbeiter hinzufügen
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>HRthis - HR Management System</title>
        <meta name="description" content="HR Management System" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">HRthis</h1>
              </div>
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'dashboard'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('employees')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'employees'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Mitarbeiter
                </button>
                <button
                  onClick={() => setActiveTab('requests')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'requests'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Urlaubsanträge
                </button>
                <button
                  onClick={() => setActiveTab('expenses')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'expenses'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Spesen
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {activeTab === 'dashboard' && <DashboardTab />}
            {activeTab === 'employees' && <EmployeesTab />}
            {activeTab === 'requests' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">Urlaubsanträge</h3>
                <p className="text-gray-500 mt-2">Coming soon...</p>
              </div>
            )}
            {activeTab === 'expenses' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">Spesen</h3>
                <p className="text-gray-500 mt-2">Coming soon...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}