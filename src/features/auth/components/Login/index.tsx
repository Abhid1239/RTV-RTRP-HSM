import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { loginRequest, selectAuth } from '@redux/slices/authSlice';

const Login = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector(selectAuth);
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = () => {
        dispatch(loginRequest(credentials));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className="max-w-md">
                <input
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Email"
                    className="w-full p-2 mb-2 border rounded"
                />
                <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                />
                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default Login; 