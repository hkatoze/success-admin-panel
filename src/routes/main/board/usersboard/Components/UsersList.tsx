import React from "react";
import "./UsersList.css";
import FEMALE_ICON from "../../../../../assets/female-user-icon.png";
import MALE_ICON from "../../../../../assets/admin-user-icon.jpg";
import { endpoint, headers, UserModel } from "../../../../../constants";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
interface UsersListProps {
  users: UserModel[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (userId: string) =>
      axios
        .delete(`${endpoint}/api/users/${userId}`, {
          headers: headers,
        })
        .then((response) => {
          return response.data;
        }),
    onSuccess: () => {
      queryClient.invalidateQueries;
    },
  });
  return (
    <table className="users-list">
      <thead>
        <tr>
          <th>Photo</th>
          <th>Nom</th>
          <th>Type de bac</th>
          <th>Année du bac</th>
          <th>Genre</th>
          <th>Téléphone</th>
          <th>Pays</th>
          <th>Ville</th>
          <th>Tempérament</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>
              <img
                src={user.genre == "HOMME" ? MALE_ICON : FEMALE_ICON}
                alt={user.nom_et_prenom}
                className="user-photo"
              />
            </td>
            <td>{user.nom_et_prenom}</td>
            <td>{user.type_bac}</td>
            <td>{user.annee_bac}</td>
            <td>{user.genre}</td>
            <td>{user.phone}</td>
            <td>{user.pays_origine}</td>
            <td>{user.ville_origine}</td>
            <td>{user.temperament}</td>
            <td>
              <button className="edit-button">✏️</button>
              <span> </span>
              <button
                className="delete-button"
                onClick={() => {
                  if (
                    confirm("Voulez vous vraiment supprimer cet utilisateur?")
                  ) {
                    deleteMutation.mutate(`${user.id}`);
                  }
                }}
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
