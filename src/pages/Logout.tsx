import React from 'react';
import axios from 'axios';

interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;