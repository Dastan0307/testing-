import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ProfileProps {}

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', phone: '', address: '', about: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get<User>('/api/profile');
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    // Логика редактирование профиля 
  };

  const handleDeleteProfile = () => {
    // Логика удаление профиля 
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address}</p>
      <p>About: {user.about}</p>
      <button onClick={handleEditProfile}>Edit Profile</button>
      <button onClick={handleDeleteProfile}>Delete Profile</button>
    </div>
  );
};

export default Profile;
