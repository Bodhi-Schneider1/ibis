import React, { useState, useEffect } from 'react';
import { Users, LogIn, LogOut, Clock } from 'lucide-react';

export default function SignInSystem() {
  const [signedInUsers, setSignedInUsers] = useState([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Load signed in users on mount
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const result = await window.storage.get('signed-in-users', true);
      if (result && result.value) {
        setSignedInUsers(JSON.parse(result.value));
      }
      setLoading(false);
    } catch (err) {
      // No users signed in yet
      setSignedInUsers([]);
      setLoading(false);
    }
  };

  const saveUsers = async (users) => {
    try {
      await window.storage.set('signed-in-users', JSON.stringify(users), true);
    } catch (err) {
      setError('Failed to save. Please try again.');
      console.error(err);
    }
  };

  const handleSignIn = async () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    // Check if already signed in
    if (signedInUsers.some(u => u.name.toLowerCase() === name.trim().toLowerCase())) {
      setError('You are already signed in!');
      return;
    }

    const newUser = {
      name: name.trim(),
      signInTime: new Date().toISOString(),
      id: Date.now().toString()
    };

    const updatedUsers = [...signedInUsers, newUser];
    setSignedInUsers(updatedUsers);
    await saveUsers(updatedUsers);
    setName('');
    setError('');
  };

  const handleSignOut = async (userId) => {
    const updatedUsers = signedInUsers.filter(u => u.id !== userId);
    setSignedInUsers(updatedUsers);
    await saveUsers(updatedUsers);
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return 'Today';
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Users className="text-indigo-600" size={28} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Sign In/Out System</h1>
          </div>
          <p className="text-gray-600 ml-14">Track who's here in real-time across all devices</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sign In</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              onKeyPress={(e) => e.key === 'Enter' && handleSignIn()}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              onClick={handleSignIn}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 font-medium shadow-md"
            >
              <LogIn size={20} />
              Sign In
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 ml-1">{error}</p>
          )}
        </div>

        {/* Currently Signed In */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Currently Signed In
            </h2>
            <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
              {signedInUsers.length} {signedInUsers.length === 1 ? 'person' : 'people'}
            </div>
          </div>

          {signedInUsers.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500">No one is signed in yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {signedInUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} />
                        <span>
                          {formatDate(user.signInTime)} at {formatTime(user.signInTime)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSignOut(user.id)}
                    className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-2 font-medium"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="text-sm text-indigo-800">
            <strong>💡 Tip:</strong> This system syncs across all devices in real-time. Anyone viewing this page will see the same sign-in list!
          </p>
        </div>
      </div>
    </div>
  );
}
