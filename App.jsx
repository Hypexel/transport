import React, { useState } from 'react';
import { 
  Users, MapPin, UserCheck, Truck, Receipt, 
  CreditCard, Tag, Store, FileText, BarChart2, 
  User, Diamond, Plus, Search, X 
} from 'lucide-react';

// --- COMPONENTS ---

const Sidebar = () => {
  const menuItems = [
    { name: 'Parties', icon: <Users size={20} />, active: true },
    { name: 'Trips', icon: <MapPin size={20} /> },
    { name: 'Suppliers', icon: <UserCheck size={20} /> },
    { name: 'Drivers', icon: <User size={20} /> },
    { name: 'Trucks', icon: <Truck size={20} /> },
    { name: 'Expenses', icon: <Receipt size={20} />, badge: 'NEW' },
    { name: 'Diesel Card', icon: <CreditCard size={20} />, badge: 'NEW' },
    { name: 'FASTag', icon: <Tag size={20} /> },
    { name: 'Shop Khata', icon: <Store size={20} /> },
    { name: 'Invoices', icon: <FileText size={20} /> },
    { name: 'Reports', icon: <BarChart2 size={20} /> },
    { name: 'Profile', icon: <User size={20} /> },
    { name: 'Premium', icon: <Diamond size={20} color="#f59e0b" /> },
  ];

  return (
    <div className="w-64 bg-gray-50 h-screen border-r border-gray-200 flex flex-col fixed">
      <div className="p-6 flex items-center gap-2">
        <Truck className="text-green-600" size={32} />
        <h1 className="text-xl font-bold text-gray-800">TransportBook</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button 
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  item.active ? 'bg-[#0f172a] text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span className="flex-1 text-left">{item.name}</span>
                {item.badge && (
                  <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 text-xs text-gray-500 flex items-center gap-2">
        <span className="bg-green-100 text-green-700 p-1 rounded-full border border-green-500">✔</span>
        100% Safe & Secure
      </div>
    </div>
  );
};

const Header = ({ title }) => (
  <header className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <div className="flex items-center gap-4">
      {/* Dynamic Header Buttons based on the screen */}
      <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
        <Plus size={16} /> Add Party
      </button>
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
        <Plus size={16} /> Add Trip
      </button>
    </div>
  </header>
);

const AddPartyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Add Party Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Party Name*</label>
            <input type="text" placeholder="Enter Party Name" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500" />
          </div>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Opening Balance</label>
              <input type="number" defaultValue="0" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">Opening Balance Date</label>
              <input type="date" defaultValue="2026-03-28" className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          
          <button type="button" className="text-blue-600 text-sm font-medium flex items-center gap-1">
            <Plus size={16} /> Add Mobile Number
          </button>
          
          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
              Close
            </button>
            <button type="button" className="px-4 py-2 bg-gray-200 text-gray-400 rounded-md text-sm cursor-not-allowed">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      
      <div className="ml-64 flex-1 flex flex-col h-screen overflow-hidden">
        <Header title="Parties" />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 min-h-[500px]">
            
            {/* Stats Row */}
            <div className="flex gap-4 mb-6">
              <div className="border border-gray-200 rounded-md p-4 min-w-[200px]">
                <p className="text-xs text-gray-500 font-medium uppercase mb-1">Total Party Balance ⓘ</p>
                <p className="text-xl font-semibold text-blue-600">₹ 0</p>
              </div>
              <div className="border border-gray-200 rounded-md p-4 min-w-[200px]">
                <p className="text-xs text-gray-500 font-medium uppercase mb-1">Total Active Trips ⓘ</p>
                <p className="text-xl font-semibold text-green-600">0</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search Parties" 
                className="w-full md:w-1/2 border border-blue-400 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Data Table */}
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#eef2ff] text-gray-700 font-medium">
                  <tr>
                    <th className="px-4 py-3 border-b">Name</th>
                    <th className="px-4 py-3 border-b">Mobile Number</th>
                    <th className="px-4 py-3 border-b">Active Trips Count</th>
                    <th className="px-4 py-3 border-b">Party Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Empty State */}
                  <tr>
                    <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                      Sorry, no Parties found
                    </td>
                  </tr>
                  {/* Example Data Row (Uncomment to see it populated) */}
                  {/* <tr className="border-b hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-3 font-medium">Test Party</td>
                    <td className="px-4 py-3">+91 9876543210</td>
                    <td className="px-4 py-3">0</td>
                    <td className="px-4 py-3 text-blue-600 font-medium">₹ 0</td>
                  </tr>
                  */}
                </tbody>
              </table>
            </div>
            
            {/* Demo Trigger for Modal */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-2">Click below to test the modal interaction</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Open Add Party Modal
              </button>
            </div>

          </div>
        </main>
      </div>

      <AddPartyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
