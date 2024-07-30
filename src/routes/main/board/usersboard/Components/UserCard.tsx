import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

interface UserCardProps {
    userId?: number;
    nom_et_prenom: string;
    genre: string;
    phone: string;
    type_bac: string;
    ville_origine: string;
    dominantForceTemperament: string;
    dominantWeaknessTemperament: string;
    temperament: string;
    skills: string;
    authentificationCode: string;
}

const genderColors: { [key: string]: string } = {
  HOMME: 'blue',
  FEMME: 'pink',
 
};

const UserCard: React.FC<UserCardProps> = ({ userId,nom_et_prenom, phone,type_bac,ville_origine,dominantForceTemperament,dominantWeaknessTemperament,temperament,skills,authentificationCode, genre }) => {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Avatar sx={{ bgcolor: '#ccc', mb: 2 }}>{nom_et_prenom.charAt(0)}</Avatar>
        <Typography variant="h6">{nom_et_prenom}</Typography>
        <Typography variant="body2" color="textSecondary">
          {phone}
        </Typography>
        <Box sx={{ mt: 1, px: 2, py: 0.5, bgcolor: genderColors[genre], borderRadius: 1 }}>
          <Typography variant="body2" color="white">
            {type_bac}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
