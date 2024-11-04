import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard';
import { publishableKey } from './lib/clerk';

function App() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Router>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;