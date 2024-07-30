import React from 'react';
import { Grid, Typography } from '@mui/material';
import UserCard from './UserCard';
import axios from 'axios';
import { endpoint, headers, UserModel } from '../../../../../constants';
import { useQuery } from 'react-query';

const users = [
  { name: 'Manu', email: 'manu@scriptbox.com', role: 'Analyst' },
  { name: 'Nilakanta Malik', email: 'nila@scriptbox.com', role: 'Manager' },
  { name: 'Harshbalyan', email: 'hars@scriptbox.com', role: 'Editor' },
  { name: 'Nitin', email: 'nitin@scriptbox.com', role: 'Admin' },
  { name: 'Mohan Kumar', email: 'mohan.kumar@scriptbox.com', role: 'Admin' },
  { name: 'Riney', email: 'riney@scriptbox.com', role: 'Manager' },
  { name: 'Vasu Adari', email: 'vasu.adari@scriptbox.com', role: 'Editor' },
  { name: 'Siva Kumar', email: 'siva.kumar@scriptbox.com', role: 'Admin' },
];



const fetchAllUsers = () => {
    return axios.get(`${endpoint}/api/users`, { headers: headers });
  };



export const UserList = () => {
    const {
        data: dataAllUsers,
      } = useQuery(["all-users-list"], fetchAllUsers);

      
    
    
    return (
        <Grid container spacing={2}>
          {dataAllUsers?.data?.data?.map((user: UserModel  ) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={user.phone}>
              <UserCard userId ={user.id} nom_et_prenom ={user.nom_et_prenom}  phone={user.phone} type_bac={user.type_bac} ville_origine={user.ville_origine} dominantForceTemperament={user.dominantForceTemperament} dominantWeaknessTemperament={user.dominantWeaknessTemperament} temperament={user.temperament} skills={user.skills} authentificationCode={user.authentificationCode} genre= {user.genre}/>
            </Grid>
          ))}
        </Grid>
      );
    };