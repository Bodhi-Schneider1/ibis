import { useState, useEffect } from 'react';
import { Lock, LogOut, Mail, User, CheckCircle, Users, Activity, Shield, Globe, Smartphone, Monitor, Clock, Key, AlertCircle } from 'lucide-react';

export default function CloudAuthPlatform() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeView, setActiveView] = useState('dashboard'); // dashboard, sessions, users
  const [allUsers, setAllUsers] = useState([]);
  const [activeSessions, setActiveSessions] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeSessions: 0, totalLogins: 0 });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated && currentUser?.isAdmin) {
      loadAdminData();
    }
  }, [isAuthenticated, currentUser]);

  const checkAuthStatus = async () => {
    try {
      const result = await window.storage.get('auth_session', true);
      if (result && result.value) {
        const session = JSON.parse(result.value);
        setCurrentUser(session);
        setIsAuthenticated(true);
        
        // Update last active time
        await updateSessionActivity(session.email);
      }
    } catch (error) {
      console.log('No active session');
    } finally {
      setLoading(false);
    }
  };

  const updateSessionActivity = async (email) => {
    try {
      const sessionKey = `session_${email.toLowerCase()}`;
      const existingSession = await window.storage.get(sessionKey, true);
      
      const sessionData = existingSession ? JSON.parse(existingSession.value) : {};
      sessionData.lastActive = new Date().toISOString();
      sessionData.email = email;
      
      await window.storage.set(sessionKey, JSON.stringify(sessionData), true);
    } catch (error) {
      console.log('Could not update session activity');
    }
  };

  const loadAdminData = async () => {
    try {
      // Load all users
      const usersResult = await window.storage.list('user_', true);
      if (usersResult && usersResult.keys) {
        const userPromises = usersResult.keys.map(async (key) => {
          try {
            const result = await window.storage.get(key, true);
            return result ? JSON.parse(result.value) : null;
          } catch {
            return null;
          }
        });
        
        const users = (await Promise.all(userPromises)).filter(u => u !== null);
        setAllUsers(users);
        
        // Load sessions
        const sessionsResult = await window.storage.list('session_', true);
        if (sessionsResult && sessionsResult.keys) {
          const sessionPromises = sessionsResult.keys.map(async (key) => {
            try {
              const result = await window.storage.get(key, true);
              return result ? JSON.parse(result.value) : null;
            } catch {
              return null;
            }
          });
          
          const sessions = (await Promise.all(sessionPromises)).filter(s => s !== null);
          setActiveSessions(sessions);
          
          // Calculate stats
          const statsResult = await window.storage.get('platform_stats', true);
          const currentStats = statsResult ? JSON.parse(statsResult.value) : { totalLogins: 0 };
          
          setStats({
            totalUsers: users.length,
            activeSessions: sessions.length,
            totalLogins: currentStats.totalLogins || 0
          });
        }
      }
    } catch (error) {
      console.log('Error loading admin data:', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const userKey = `user_${email.toLowerCase()}`;
      const userResult = await window.storage.get(userKey, true);
      
      if (!userResult) {
        setError('User not found. Please sign up first.');
        return;
      }

      const userData = JSON.parse(userResult.value);
      
      if (userData.password !== password) {
        setError('Invalid password');
        return;
      }

      // Create session with device info
      const session = {
        email: userData.email,
        name: userData.name,
        isAdmin: userData.isAdmin || false,
        signedInAt: new Date().toISOString(),
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent.split(' ').slice(-1)[0].split('/')[0]
      };

      await window.storage.set('auth_session', JSON.stringify(session), true);
      
      // Update session tracking
      const sessionKey = `session_${email.toLowerCase()}`;
      await window.storage.set(sessionKey, JSON.stringify({
        email: session.email,
        lastActive: new Date().toISOString(),
        deviceType: session.deviceType,
        browser: session.browser
      }), true);
      
      // Update total logins
      try {
        const statsResult = await window.storage.get('platform_stats', true);
        const stats = statsResult ? JSON.parse(statsResult.value) : { totalLogins: 0 };
        stats.totalLogins = (stats.totalLogins || 0) + 1;
        await window.storage.set('platform_stats', JSON.stringify(stats), true);
      } catch (e) {
        console.log('Could not update stats');
      }

      setCurrentUser(session);
      setIsAuthenticated(true);
      setSuccess('Successfully signed in!');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Sign in failed. Please try again.');
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password || !name) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const userKey = `user_${email.toLowerCase()}`;
      
      try {
        const existingUser = await window.storage.get(userKey, true);
        if (existingUser) {
          setError('User already exists. Please sign in.');
          return;
        }
      } catch (e) {
        // User doesn't exist, continue
      }

      // Check if this is the first user (make them admin)
      const usersResult = await window.storage.list('user_', true);
      const isFirstUser = !usersResult || !usersResult.keys || usersResult.keys.length === 0;

      const userData = {
        email: email.toLowerCase(),
        name: name,
        password: password,
        isAdmin: isFirstUser,
        createdAt: new Date().toISOString()
      };

      await window.storage.set(userKey, JSON.stringify(userData), true);
      
      const session = {
        email: userData.email,
        name: userData.name,
        isAdmin: userData.isAdmin,
        signedInAt: new Date().toISOString(),
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent.split(' ').slice(-1)[0].split('/')[0]
      };

      await window.storage.set('auth_session', JSON.stringify(session), true);
      
      // Create session tracking
      const sessionKey = `session_${email.toLowerCase()}`;
      await window.storage.set(sessionKey, JSON.stringify({
        email: session.email,
        lastActive: new Date().toISOString(),
        deviceType: session.deviceType,
        browser: session.browser
      }), true);

      setCurrentUser(session);
      setIsAuthenticated(true);
      setSuccess(isFirstUser ? 'Account created! You are the admin.' : 'Account created successfully!');
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      setError('Sign up failed. Please try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await window.storage.delete('auth_session', true);
      
      // Keep session tracking for admin view, just update status
      if (currentUser) {
        const sessionKey = `session_${currentUser.email.toLowerCase()}`;
        try {
          const sessionResult = await window.storage.get(sessionKey, true);
          if (sessionResult) {
            const sessionData = JSON.parse(sessionResult.value);
            sessionData.signedOut = new Date().toISOString();
            await window.storage.set(sessionKey, JSON.stringify(sessionData), true);
          }
        } catch (e) {
          console.log('Could not update session');
        }
      }
      
      setIsAuthenticated(false);
      setCurrentUser(null);
      setSuccess('Successfully signed out!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Sign out failed. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + 
           ' at ' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const getDeviceIcon = (deviceType) => {
    return deviceType === 'Mobile' ? Smartphone : Monitor;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #0a0a12 0%, #1a1625 50%, #0f0a1e 100%)'
      }}>
        <div className="text-white text-2xl font-light tracking-wider animate-pulse">
          Loading Cloud Platform...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a12 0%, #1a1625 50%, #0f0a1e 100%)',
      fontFamily: '"Space Mono", monospace'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }

        .float-anim {
          animation: float 6s ease-in-out infinite;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .nav-button {
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #3b82f6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-button:hover::after {
          width: 100%;
        }

        .nav-button.active {
          color: #8b5cf6;
        }

        .nav-button.active::after {
          width: 100%;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-in {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {isAuthenticated ? (
        <div className="relative z-10 max-w-7xl mx-auto slide-in">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center float-anim">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                    CloudAuth Platform
                  </h1>
                  <p className="text-purple-300 text-sm">Enterprise Authentication System</p>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg border border-red-500/30 transition-all flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>

            {/* User info bar */}
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{currentUser?.name}</p>
                  <p className="text-purple-300 text-sm">{currentUser?.email}</p>
                </div>
              </div>
              {currentUser?.isAdmin && (
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center gap-2">
                  <Key className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-300 text-sm font-medium">Administrator</span>
                </div>
              )}
            </div>
          </div>

          {currentUser?.isAdmin ? (
            <>
              {/* Navigation */}
              <div className="flex gap-4 mb-8 border-b border-white/10 pb-2">
                <button
                  onClick={() => setActiveView('dashboard')}
                  className={`nav-button px-4 py-2 text-white/70 hover:text-white ${activeView === 'dashboard' ? 'active' : ''}`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveView('users')}
                  className={`nav-button px-4 py-2 text-white/70 hover:text-white ${activeView === 'users' ? 'active' : ''}`}
                >
                  Users
                </button>
                <button
                  onClick={() => setActiveView('sessions')}
                  className={`nav-button px-4 py-2 text-white/70 hover:text-white ${activeView === 'sessions' ? 'active' : ''}`}
                >
                  Active Sessions
                </button>
              </div>

              {activeView === 'dashboard' && (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="stat-card rounded-xl p-6 card-hover">
                      <div className="flex items-center justify-between mb-4">
                        <Users className="w-8 h-8 text-purple-400" />
                        <div className="text-3xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                          {stats.totalUsers}
                        </div>
                      </div>
                      <p className="text-white/70">Total Users</p>
                    </div>

                    <div className="stat-card rounded-xl p-6 card-hover">
                      <div className="flex items-center justify-between mb-4">
                        <Activity className="w-8 h-8 text-blue-400" />
                        <div className="text-3xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                          {stats.activeSessions}
                        </div>
                      </div>
                      <p className="text-white/70">Active Sessions</p>
                    </div>

                    <div className="stat-card rounded-xl p-6 card-hover">
                      <div className="flex items-center justify-between mb-4">
                        <Globe className="w-8 h-8 text-green-400" />
                        <div className="text-3xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                          {stats.totalLogins}
                        </div>
                      </div>
                      <p className="text-white/70">Total Logins</p>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: '"Syne", sans-serif' }}>
                      Platform Status
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white">All systems operational</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-400" />
                        <span className="text-white">Cloud storage synced across all devices</span>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span className="text-white">End-to-end encrypted sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeView === 'users' && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                      All Users ({allUsers.length})
                    </h3>
                  </div>
                  <div className="divide-y divide-white/10">
                    {allUsers.map((user, idx) => (
                      <div key={idx} className="p-6 hover:bg-white/5 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{user.name}</p>
                              <p className="text-purple-300 text-sm">{user.email}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            {user.isAdmin && (
                              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs mb-2 inline-block">
                                Admin
                              </span>
                            )}
                            <p className="text-white/50 text-xs">
                              Joined {formatDate(user.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeView === 'sessions' && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                      Active Sessions ({activeSessions.length})
                    </h3>
                  </div>
                  <div className="divide-y divide-white/10">
                    {activeSessions.map((session, idx) => {
                      const DeviceIcon = getDeviceIcon(session.deviceType);
                      return (
                        <div key={idx} className="p-6 hover:bg-white/5 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                <DeviceIcon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-medium">{session.email}</p>
                                <div className="flex items-center gap-3 text-sm text-purple-300 mt-1">
                                  <span>{session.deviceType}</span>
                                  <span>•</span>
                                  <span>{session.browser}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Active</span>
                              </div>
                              <p className="text-white/50 text-xs">
                                Last active {formatDate(session.lastActive)}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          ) : (
            // Regular User View
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: '"Syne", sans-serif' }}>
                    You're Connected
                  </h2>
                  <p className="text-purple-300">Authenticated across all your devices</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span className="text-white/70 text-sm">Email</span>
                    </div>
                    <p className="text-white font-medium">{currentUser?.email}</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span className="text-white/70 text-sm">Signed In</span>
                    </div>
                    <p className="text-white font-medium">{formatDate(currentUser?.signedInAt)}</p>
                  </div>

                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      {currentUser?.deviceType === 'Mobile' ? (
                        <Smartphone className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Monitor className="w-5 h-5 text-purple-400" />
                      )}
                      <span className="text-white/70 text-sm">Device</span>
                    </div>
                    <p className="text-white font-medium">{currentUser?.deviceType} • {currentUser?.browser}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="text-white font-medium mb-1">Cloud Synchronization Active</p>
                    <p className="text-white/70 text-sm">
                      Your session is automatically synced across all devices. Sign in from any device to access your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Sign In/Up View
        <div className="relative z-10 max-w-md mx-auto" style={{ paddingTop: '10vh' }}>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-2xl slide-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl mb-6 float-anim">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: '"Syne", sans-serif' }}>
                CloudAuth
              </h1>
              <p className="text-purple-300 font-medium">
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-5">
              {isSignUp && (
                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setSuccess('');
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
                className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-white/50 text-sm">
              <Globe className="w-4 h-4" />
              <span>Synchronized across all devices</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
