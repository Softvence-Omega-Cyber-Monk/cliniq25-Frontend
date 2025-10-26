import React, { useState, useCallback } from 'react';

// --- TypeScript Interfaces ---

type TicketStatus = 'Pending' | 'Resolved';

interface Ticket {
  id: string;
  subject: string;
  user: string;
  date: string;
  status: TicketStatus;
  userMessage: string;
  from: string;
}

interface StatsItem {
  icon: React.ReactNode;
  title: string;
  count: number;
}

// --- Mock Data ---

const MOCK_TICKETS: Ticket[] = [
  { id: '001234', subject: 'Order #123456 Issue', user: 'Alex Johnson', date: '15/10/2023', status: 'Pending', from: 'John Doe', userMessage: 'Product received damaged. Can you please help with a refund or replacement?' },
  { id: '001235', subject: 'Login Problem', user: 'Maria Smith', date: '16/10/2023', status: 'Resolved', from: 'Maria Smith', userMessage: 'I cannot log into my account. I have tried resetting my password multiple times with no luck.' },
  { id: '001236', subject: 'Account Verification', user: 'David Brown', date: '17/10/2023', status: 'Resolved', from: 'David Brown', userMessage: 'My account shows that I need to verify my identity, but the link you sent expired.' },
  { id: '001237', subject: 'Order #123456 Issue', user: 'Emily Davis', date: '18/10/2023', status: 'Pending', from: 'Emily Davis', userMessage: 'My tracking number hasn\'t updated in five days. Can you check on the status of my shipment?' },
  { id: '001238', subject: 'Account Verification', user: 'Michael Wilson', date: '19/10/2023', status: 'Resolved', from: 'Michael Wilson', userMessage: 'I am trying to change my email address but the security system keeps flagging it as suspicious activity.' },
  { id: '001239', subject: 'Login Problem', user: 'Sarah Taylor', date: '20/10/2023', status: 'Pending', from: 'Sarah Taylor', userMessage: 'I forgot my password and my phone number linked to the account is no longer active. How can I recover access?' },
];

const getStats = (tickets: Ticket[]): StatsItem[] => [
  { 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>), 
    title: 'Pending', 
    count: tickets.filter(t => t.status === 'Pending').length 
  },
  { 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>), 
    title: 'Completed Sessions', 
    count: 5 
  },
  { 
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), 
    title: 'Resolved Tickets', 
    count: tickets.filter(t => t.status === 'Resolved').length 
  },
];


// --- Sub-Components ---

/**
 * Renders a small card for dashboard statistics.
 */
const StatsCard: React.FC<{ item: StatsItem }> = ({ item }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg flex-1 min-w-[200px]">
    <div className="flex justify-between items-start">
      <h3 className="text-gray-500 text-sm font-medium">{item.title}</h3>
      <div className="text-gray-400">
        {item.icon}
      </div>
    </div>
    <p className="text-3xl font-semibold mt-2 text-gray-800">{item.count}</p>
  </div>
);

/**
 * Renders the status badge for the ticket table.
 */
const StatusBadge: React.FC<{ status: TicketStatus }> = ({ status }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
    status === 'Pending' 
      ? 'bg-yellow-100 text-yellow-800' 
      : 'bg-green-100 text-green-800'
  }`}>
    {status}
  </span>
);

/**
 * Renders the detail and reply modal.
 */
const TicketDetailModal: React.FC<{ ticket: Ticket; onClose: () => void }> = ({ ticket, onClose }) => {
  const [replySubject, setReplySubject] = useState('');
  const [replyMessage, setReplyMessage] = useState('');

  const handleSave = () => {
    // In a real app, this would send the reply and update the ticket status.
    console.log(`Sending reply for ${ticket.id}: Subject - ${replySubject}, Message - ${replyMessage}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900/50 bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-2xl p-6 relative transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Ticket ID: {ticket.id}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div className="py-4 space-y-3">
          {/* Ticket Information */}
          <p className="text-sm">
            <span className="font-semibold text-gray-700">From:</span> {ticket.from}
          </p>
          <p className="text-sm">
            <span className="font-semibold text-gray-700">Ticket ID:</span> {ticket.id}
          </p>
          
          {/* User Message Card */}
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-800 italic">{ticket.userMessage}</p>
          </div>
          
          {/* Reply Section */}
          <h3 className="text-lg font-semibold pt-4 border-t mt-4">Reply to User</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="replySubject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                id="replySubject"
                type="text"
                placeholder="..."
                value={replySubject}
                onChange={(e) => setReplySubject(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
              />
            </div>
            <div>
              <label htmlFor="replyMessage" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="replyMessage"
                placeholder="Write your message here..."
                rows={5}
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 flex justify-end">
          <button 
            onClick={handleSave}
            className="px-6 py-2 bg-teal-400 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * Main Application Component (App)
 */
const App: React.FC = () => {
  const [tickets] = useState<Ticket[]>(MOCK_TICKETS);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [autoReplyTemplate, setAutoReplyTemplate] = useState('Write your auto-reply here...');
  const [showToast, setShowToast] = useState(false);

  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  // Handle opening the modal
  const handleViewTicket = useCallback((id: string) => {
    setSelectedTicketId(id);
  }, []);

  // Handle closing the modal
  const handleCloseModal = useCallback(() => {
    setSelectedTicketId(null);
  }, []);

  // Handle saving support settings
  const handleSaveSettings = () => {
    // In a real application, this would save the template to the backend.
    console.log("Template saved:", autoReplyTemplate);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const stats = getStats(tickets);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-xl z-50 transition-opacity duration-300">
          Settings saved successfully!
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Support Tickets</h1>
        <p className="text-gray-500 text-sm mt-1">Configure system preferences, security, and platform features</p>
      </header>

      {/* Stats Cards */}
      <section className="flex flex-wrap gap-4 mb-8">
        {stats.map((item) => (
          <StatsCard key={item.title} item={item} />
        ))}
      </section>

      {/* Tickets Table */}
      <section className="bg-white p-6 rounded-xl shadow-lg mb-8 overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 hidden">Ticket List</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticked ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ticket ID: {ticket.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.subject}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.user}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={ticket.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleViewTicket(ticket.id)}
                    className="text-blue-600 hover:text-blue-900 font-semibold transition duration-150"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Support Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Support Settings</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <label htmlFor="autoReply" className="block text-sm font-medium text-gray-700 mb-2">Auto Reply Template</label>
          <textarea
            id="autoReply"
            rows={6}
            value={autoReplyTemplate}
            onChange={(e) => setAutoReplyTemplate(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 resize-none"
            placeholder="Write your auto-reply here..."
          ></textarea>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleSaveSettings}
              className="px-6 py-2 bg-teal-400 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Save changes
            </button>
          </div>
        </div>
      </section>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <TicketDetailModal 
          ticket={selectedTicket} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
