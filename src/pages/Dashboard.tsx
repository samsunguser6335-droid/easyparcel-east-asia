import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wallet, Package, Star, TrendingUp, Plus } from 'lucide-react';

export function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/auth');
      return;
    }
    const name = localStorage.getItem('userName');
    setUserName(name || 'User');
  }, [navigate]);

  // Mock data
  const walletBalance = 250.00;
  const activeShipments = 3;
  const rewardPoints = 1250;

  const recentShipments = [
    {
      id: 'EP123456',
      from: 'Singapore',
      to: 'Japan',
      status: 'In Transit',
      date: '2024-01-15',
      courier: 'Ninja Van',
    },
    {
      id: 'EP123457',
      from: 'Singapore',
      to: 'South Korea',
      status: 'Delivered',
      date: '2024-01-14',
      courier: 'SingPost',
    },
    {
      id: 'EP123458',
      from: 'Singapore',
      to: 'China',
      status: 'Picked Up',
      date: '2024-01-13',
      courier: 'SPX Express',
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bg-light py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {t('dashboard.welcome')}, {userName}!
            </h1>
            <p className="text-text-dark">
              {t('dashboard.subtitle')}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 border border-[#F9278E] text-[#F9278E] font-medium rounded-md hover:bg-[#F9278E] hover:text-white transition-colors"
          >
            {t('dashboard.logout')}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Wallet Balance */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Wallet size={24} className="text-green-600" />
              </div>
              <TrendingUp size={20} className="text-green-600" />
            </div>
            <p className="text-sm text-gray-500 mb-1">{t('dashboard.walletBalance')}</p>
            <p className="text-3xl font-black text-gray-900">S${walletBalance.toFixed(2)}</p>
            <button className="mt-4 text-sm text-[#F9278E] font-medium hover:underline">
              {t('dashboard.addFunds')}
            </button>
          </div>

          {/* Active Shipments */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Package size={24} className="text-blue-600" />
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {activeShipments} {t('dashboard.active')}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{t('dashboard.activeShipments')}</p>
            <p className="text-3xl font-black text-gray-900">{activeShipments}</p>
            <button className="mt-4 text-sm text-[#F9278E] font-medium hover:underline">
              {t('dashboard.viewAll')}
            </button>
          </div>

          {/* Reward Points */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Star size={24} className="text-yellow-600" />
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-sm font-medium rounded-full">
                VIP
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{t('dashboard.rewardPoints')}</p>
            <p className="text-3xl font-black text-gray-900">{rewardPoints.toLocaleString()}</p>
            <button className="mt-4 text-sm text-[#F9278E] font-medium hover:underline">
              {t('dashboard.redeemRewards')}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('dashboard.quickActions')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#F9278E] hover:bg-pink-50 transition-colors">
              <Plus size={24} className="text-[#F9278E]" />
              <span className="text-sm font-medium text-gray-700">{t('dashboard.newShipment')}</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#F9278E] hover:bg-pink-50 transition-colors">
              <Package size={24} className="text-[#F9278E]" />
              <span className="text-sm font-medium text-gray-700">{t('dashboard.trackPackage')}</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#F9278E] hover:bg-pink-50 transition-colors">
              <Wallet size={24} className="text-[#F9278E]" />
              <span className="text-sm font-medium text-gray-700">{t('dashboard.addFunds')}</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 border border-gray-200 rounded-lg hover:border-[#F9278E] hover:bg-pink-50 transition-colors">
              <Star size={24} className="text-[#F9278E]" />
              <span className="text-sm font-medium text-gray-700">{t('dashboard.viewRewards')}</span>
            </button>
          </div>
        </div>

        {/* Recent Shipments */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">{t('dashboard.recentShipments')}</h2>
            <button className="text-sm text-[#F9278E] font-medium hover:underline">
              {t('dashboard.viewAll')}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.trackingId')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.from')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.to')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.courier')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.status')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('dashboard.date')}</th>
                </tr>
              </thead>
              <tbody>
                {recentShipments.map((shipment) => (
                  <tr key={shipment.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="font-semibold text-[#F9278E]">{shipment.id}</span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">{shipment.from}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{shipment.to}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{shipment.courier}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          shipment.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : shipment.status === 'In Transit'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">{shipment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
