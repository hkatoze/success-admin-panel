import React from "react";
import "./TemperamentCard.css";
import TEMPERAMENT_ICON from "../../../../../assets/temperament-icon.png";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
interface TemperamentCardProps {
  id?: number;
  temperamentForce: string;
  temperamentFaiblesse: string;
  description: string;
  filiereRecommandee: string;
  link: string;
}

const TemperamentCard: React.FC<TemperamentCardProps> = ({
  id,
  temperamentForce,
  temperamentFaiblesse,
  description,
  filiereRecommandee,
  link,
}) => {
  const filieres = filiereRecommandee.split(",");

  return (
    <Link to={link}>
      <div className="temperament-card" style={{ borderLeftColor: "blue" }}>
        <div className="temperament-content">
          <div className="temperament-icon">
            <img src={TEMPERAMENT_ICON} alt="icon" />
          </div>
          <div className="temperament-details">
            <h3>
              {temperamentForce} {temperamentFaiblesse}
            </h3>
            <p>
              <h5>Filières recommandées:</h5>
              <ul>
                {filieres.map((filiere: string) => (
                  <li>{filiere}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="temperament-status">
            <FaEdit size={25} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TemperamentCard;
