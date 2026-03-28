import React, { useState } from 'react';
import { 
  Menu, X, Truck, Users, FileText, 
  MapPin, CreditCard, Settings, Plus, Search, 
  ChevronDown, FileBox, IndianRupee 
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar */}
      <aside className="w-64 bg-brandDark text-slate-300 flex flex-col hidden md:flex">
        <div className="p-4 flex items-center gap-3 border-b border-slate-700">
          <Truck className="text-emerald-400" size={28} />
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">TransportBook</h1>
            <p className="text-xs text-emerald-400">100% Safe & Secure</p>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <NavItem icon={<Users size={20} />} text="Parties" />
          <NavItem icon={<MapPin size={20} />} text="Trips" active />
          <NavItem icon={<FileBox size={20} />} text="Suppliers" />
          <NavItem icon={<Users size={20} />} text="Drivers" />
          <NavItem icon={<Truck size={20} />} text="Trucks" />
          <NavItem icon={<IndianRupee size={20} />} text="Expenses" badge="NEW" />
          <NavItem icon={<CreditCard size={20} />} text="Diesel Card" badge="NEW" />
          <NavItem icon={<FileText size={20} />} text="Invoices" />
          <NavItem icon={<Settings size={20} />} text="Profile" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">Trips</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brandGreen text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-emerald-700 transition-colors font-medium"
          >
            <Plus size={18} /> Add Trip
          </button>
        </header>

        {/* Dashboard Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-t border-x border-t flex justify-between items-center shadow-sm">
            <div className="relative w-96">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search Trips" 
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-brandBlue"
              />
            </div>
            <div className="flex gap-4">
              <select className="border rounded px-4 py-2 bg-white text-sm focus:outline-none">
                <option>All Months</option>
              </select>
              <select className="border rounded px-4 py-2 bg-white text-sm focus:outline-none">
                <option>Active Trips (Not Settled)</option>
              </select>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white border rounded-b shadow-sm overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-indigo-50/50 text-slate-600 font-medium">
                <tr>
                  <th className="px-6 py-3 border-b">Start Date</th>
                  <th className="px-6 py-3 border-b">LR Number</th>
                  <th className="px-6 py-3 border-b">Party Name</th>
                  <th className="px-6 py-3 border-b">Truck No</th>
                  <th className="px-6 py-3 border-b">Route</th>
                  <th className="px-6 py-3 border-b">Trip Status</th>
                  <th className="px-6 py-3 border-b">Party Balance</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Row */}
                <tr className="hover:bg-slate-50 border-b cursor-pointer text-slate-700">
                  <td className="px-6 py-4">28 Mar 2026</td>
                  <td className="px-6 py-4">LRN-001</td>
                  <td className="px-6 py-4 text-brandBlue font-medium">Test Party</td>
                  <td className="px-6 py-4">CG 08 1971</td>
                  <td className="px-6 py-4">Bhoti ➔ Raigarh</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-red-500">₹ 98,270</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Trip Modal */}
      {isModalOpen && <AddTripModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// Sidebar Item Component
function NavItem({ icon, text, active, badge }) {
  return (
    <a href="#" className={`flex items-center justify-between px-6 py-3 text-sm transition-colors ${active ? 'bg-brandDark text-white border-l-4 border-emerald-500' : 'hover:bg-slate-800 hover:text-white border-l-4 border-transparent'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{text}</span>
      </div>
      {badge && <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{badge}</span>}
    </a>
  );
}

// Modal Component
function AddTripModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50">
          <h3 className="text-lg font-bold">Add Trip</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
        </div>
        
        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-sm">Trip Details</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Select Party *</label>
                <select className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-brandBlue outline-none"><option>Select or add new</option></select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Truck Registration No.*</label>
                  <select className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-brandBlue outline-none"><option>Select Truck</option></select>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Driver Name*</label>
                  <input type="text" placeholder="Eg: Harish" className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-brandBlue outline-none"/>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Route</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Origin*</label>
                <input type="text" placeholder="Eg: Bangalore" className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-brandBlue outline-none"/>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Destination*</label>
                <input type="text" placeholder="Eg: Delhi" className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-brandBlue outline-none"/>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t flex justify-end gap-3 bg-slate-50">
          <button onClick={onClose} className="px-4 py-2 border rounded text-sm font-medium hover:bg-slate-100 transition">Close</button>
          <button className="px-4 py-2 bg-brandBlue text-white rounded text-sm font-medium hover:bg-blue-700 transition">Save Trip</button>
        </div>
      </div>
    </div>
  );
}
