import React from "react";
import "./TemperamentView.css";
import axios from "axios";
import { endpoint, headers } from "../../../../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const TemperamentView: React.FC = () => {
  const navigate = useNavigate();

  const { temperamentId } = useParams();

  const fetchTemperamentById = () => {
    return axios.get(`${endpoint}/api/temperaments/${temperamentId}`, {
      headers: headers,
    });
  };
  const { data } = useQuery({
    queryKey: ["temperament-by-id"],
    queryFn: fetchTemperamentById,
  });
  return (
    <div className="temperamentview">
      <div className="header">
        <button
          className="back-button"
          onClick={() => {
            navigate(-1);
          }}
        >
          ← Retour
        </button>
        <h1 className="title">
          {data?.data.data.temperamentForce}{" "}
          {data?.data.data.temperamentFaiblesse}
        </h1>
      </div>

      <div className="content">
        <div className="description">
          <h2>Description</h2>
          <div>{data?.data.data.description}</div>
        </div>

        <div className="recommendations">
          <h2>Filières recommandées</h2>
          <div className="options">
            <h3>ST-------------</h3>
            <div className="option">
              <input type="checkbox" id="rs" name="rs" />
              <label htmlFor="rs">Réseaux & Systèmes informatiques</label>
            </div>
            <div className="option">
              <input type="checkbox" id="er" name="er" />
              <label htmlFor="er">Energies renouvelables</label>
            </div>
            <div className="option">
              <input type="checkbox" id="ei" name="ei" />
              <label htmlFor="ei">Electronique et informatiques</label>
            </div>
            <div className="option">
              <input type="checkbox" id="ag" name="ag" />
              <label htmlFor="ag">Agroalimentaire</label>
            </div>
            <div className="option">
              <input type="checkbox" id="mi" name="mi" />
              <label htmlFor="mi">Maintenance Industrielle</label>
            </div>

            <h3>SG-------------</h3>
            <div className="option">
              <input type="checkbox" id="sg-rs" name="sg-rs" />
              <label htmlFor="sg-rs">Réseaux & Systèmes informatiques</label>
            </div>
            <div className="option">
              <input type="checkbox" id="sg-er" name="sg-er" />
              <label htmlFor="sg-er">Energies renouvelables</label>
            </div>
            <div className="option">
              <input type="checkbox" id="sg-ei" name="sg-ei" />
              <label htmlFor="sg-ei">Electronique et informatiques</label>
            </div>
            <div className="option">
              <input type="checkbox" id="sg-ag" name="sg-ag" />
              <label htmlFor="sg-ag">Agroalimentaire</label>
            </div>
            <div className="option">
              <input type="checkbox" id="sg-mi" name="sg-mi" />
              <label htmlFor="sg-mi">Maintenance Industrielle</label>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="quit-button">Quittez</button>
        <button className="save-button">Enregistrer</button>
      </div>
    </div>
  );
};

export default TemperamentView;
