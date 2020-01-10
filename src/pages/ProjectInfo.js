import React from "react";
import "../scss/ProjectInfo.scss";
import tagIcon from "../assets/images/tag-icon.svg";

const ProjectInfo = () => {
  return (
    <div className="project-information">
      <div className="image-purpose">
        <p className="text-info">
          A <span>Ziro</span> existe para te ajudar a economizar e comprar
          melhor. Somos uma <span>assessoria de compras no atacado</span> e te
          oferecemos inúmeras comodidades. E o melhor: <span>SEM CUSTO!</span>
        </p>
      </div>
      <div className="info">
        <img src={tagIcon} alt="Informações do Projeto" />
        <p>
          O objetivo deste web app é facilitar a realização de pedidos de
          compras por parte dos clientes, trazendo maior facilidade e comodidade
          na hora de escolher as peças que deverão ser compradas nas lojas de
          atacado.
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
