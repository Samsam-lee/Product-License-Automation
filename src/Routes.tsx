import { Routes, Route, Navigate } from 'react-router-dom';
import ListLicense from './pages/ListLicense';
import Login from './pages/Login';
import RequestLicense from './pages/RequestLicense';

const App = () => (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/request-license" element={<RequestLicense />} />
        <Route path="/list-license" element={<ListLicense />} />

        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
);

export default App;
