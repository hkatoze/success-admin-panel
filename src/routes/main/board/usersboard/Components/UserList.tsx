
import { Grid } from '@mui/material';
import UserCard from './UserCard';
import axios from 'axios';
import { endpoint, headers, UserModel } from '../../../../../constants';
import { useQuery } from 'react-query';

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