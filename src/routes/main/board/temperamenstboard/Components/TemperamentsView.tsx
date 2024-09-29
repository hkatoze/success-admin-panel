import React, { useEffect, useState } from "react";
import "./TemperamentsView.css";

import { endpoint, headers, TemperamentModel } from "../../../../../constants";
import { useQuery } from "react-query";

import TemperamentCard from "./TemperamentCard";
import axios from "axios";
import Header from "../../../../../Components/Header";
const TemperamentsView: React.FC = () => {
  const fetchAllTemperaments = () => {
    return axios.get(`${endpoint}/api/temperaments`, { headers: headers });
  };

  const {
    data: dataAllTemperaments,
    isLoading: isLoadingAllTemperaments,
    isError: isErrorAllTemperaments,
    error: errorAllTemperaments, // Capture l'erreur pour un affichage détaillé
  } = useQuery(["all-temperaments-list"], fetchAllTemperaments);

  const [filteredTemperaments, setFilteredTemperaments] = useState<
    TemperamentModel[]
  >([]);

  useEffect(() => {
    if (dataAllTemperaments?.data?.data) {
      setFilteredTemperaments(dataAllTemperaments.data.data);
    }
  }, [dataAllTemperaments]);

  return (
    <div className="temperamentsview">
      <Header
        title="Temperaments"
        subtitle="Découvrez la liste complète des tempéraments possibles"
      />

      <div className="body">
        <div className="app-container">
          {filteredTemperaments.map((temperament: TemperamentModel) => (
            <TemperamentCard
              id={temperament.id}
              description={temperament.description}
              filiereRecommandee={temperament.filiereRecommandee}
              temperamentFaiblesse={temperament.temperamentFaiblesse}
              temperamentForce={temperament.temperamentForce}
              link={`/mainpage/temperamentsboard/temperamentsView/${temperament.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemperamentsView;
