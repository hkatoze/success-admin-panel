import React, { useEffect, useState } from "react";
import "./UsersView.css";
import ADMIN_PNG from "../../../../../assets/admin-user-icon.jpg";
import UsersList from "./UsersList";
import axios from "axios";
import { endpoint, headers, UserModel } from "../../../../../constants";
import { useQuery } from "react-query";
import * as XLSX from "xlsx";
const UsersView: React.FC = () => {
  const fetchAllUsers = () => {
    return axios.get(`${endpoint}/api/users`, { headers: headers });
  };

  const {
    data: dataAllUsers,
    isLoading: isLoadingAllUsers,
    isError: isErrorAllUsers,
    error: errorAllUsers, // Capture l'erreur pour un affichage détaillé
  } = useQuery(["all-users-list"], fetchAllUsers);

  const [filteredMembers, setFilteredMembers] = useState<UserModel[]>([]);

  useEffect(() => {
    if (dataAllUsers?.data?.data) {
      setFilteredMembers(dataAllUsers.data.data);
    }
  }, [dataAllUsers]);

  const onFilter = (query: string) => {
    const filtered = dataAllUsers?.data.data?.filter((member: UserModel) =>
      member.nom_et_prenom.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMembers(filtered);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilter(event.target.value);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dataAllUsers?.data.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Générer un fichier Excel et le télécharger
    XLSX.writeFile(workbook, "UsersList.xlsx");
  };
  return (
    <div className="usersboard-container">
      <header className="usersboard-header">
        <div className="search-section">
          <input
            type="text"
            placeholder="Recherche..."
            onChange={handleFilter}
            className="search-bar"
          />
        </div>
        <div className="user-info">
          <div className="user-details">
            <img src={ADMIN_PNG} alt="User Avatar" className="user-avatar" />
            <div className="username-role">
              <span className="username">{}</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>
      </header>
      <div className="usersboard-content">
        <div className="tabs">
          <div className="tabs-left">
            <h1>Utilisateurs</h1>
          </div>
          <div className="user-stats">
            <div>
              Total utilisateurs:
              <strong> {dataAllUsers?.data?.data.length}</strong>
            </div>
            <div>
              Total affiché: <strong>{filteredMembers.length}</strong>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="actions-left"></div>
          <button className="add-button">Créer un utilisateur</button>
          <button className="export-button" onClick={exportToExcel}>
            Exporter (Excel)
          </button>
        </div>
        <UsersList users={filteredMembers} />
      </div>
    </div>
  );
};

export default UsersView;
