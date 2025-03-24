import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, PieChart, LineChart, Activity, Users, DollarSign, TrendingUp, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function DashboardTemplate() {
  const navigate = useNavigate();
  
  // Sample data for charts
  const revenueData = [40, 70, 35, 50, 65, 80, 60];
  const userGrowthData = [10, 25, 15, 30, 35, 40, 50];
  
  const handleBack = () => {
    // Clear the selected template from localStorage
    localStorage.removeItem('selectedPageTemplate');
    // Navigate back or reload the page to show template selection
    window.location.reload();
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Back Button */}
      <motion.button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-4 transition-colors"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ x: -5 }}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back to Templates</span>
      </motion.button>
      
      {/* Header */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your business metrics</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {[
          { title: 'Total Revenue', value: '$24,345', icon: <DollarSign className="w-5 h-5" />, color: 'bg-blue-500' },
          { title: 'Active Users', value: '12,345', icon: <Users className="w-5 h-5" />, color: 'bg-green-500' },
          { title: 'Conversion Rate', value: '3.45%', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-purple-500' },
          { title: 'Avg. Session', value: '4m 23s', icon: <Activity className="w-5 h-5" />, color: 'bg-orange-500' }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-sm p-6 flex items-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`${stat.color} p-3 rounded-lg text-white mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Revenue Overview</h3>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {revenueData.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t-sm" 
                  style={{ height: `${value}%` }}
                ></div>
                <span className="text-xs mt-2">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">User Growth</h3>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 100 50">
              <polyline
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={userGrowthData.map((value, index) => `${index * (100 / (userGrowthData.length - 1))},${50 - value}`).join(' ')}
              />
              {userGrowthData.map((value, index) => (
                <circle
                  key={index}
                  cx={index * (100 / (userGrowthData.length - 1))}
                  cy={50 - value}
                  r="1.5"
                  fill="#8b5cf6"
                />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Additional Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {[
              { source: 'Direct', percentage: 35 },
              { source: 'Organic Search', percentage: 25 },
              { source: 'Referral', percentage: 20 },
              { source: 'Social Media', percentage: 15 },
              { source: 'Other', percentage: 5 }
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.source}</span>
                  <span className="font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'Created a new project', time: '2 minutes ago', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
              { user: 'Sarah Smith', action: 'Completed task: Dashboard Design', time: '1 hour ago', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
              { user: 'Robert Johnson', action: 'Added new comment on Sales Report', time: '3 hours ago', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
              { user: 'Emily Wilson', action: 'Submitted a bug report', time: '5 hours ago', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center">
                <img src={activity.avatar} alt={activity.user} className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}