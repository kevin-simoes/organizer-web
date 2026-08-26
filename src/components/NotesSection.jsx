import "./NotesSection.css";
import Logo from "../assets/logo.svg";
import "../styles/responsive.css";

const NotesSection = ({ groups, adicionarGrupo, selecionarGrupo }) => {
  const gruposTotais = groups.length;

  const totalCaracteres = groups.reduce(
    (total, group) => total + group.texto.length,
    0
  );

  const mediaCaracteres =
    groups.length > 0 ? Math.round(totalCaracteres / groups.length) : 0;

  return (
    <section className="group-notes-main">
      <div className="group-notes-title">
        <span>
          <svg className="banner"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
          </svg>

          <h3>Anotações</h3>

          <button onClick={adicionarGrupo}><svg className="plusbutton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg> Novo grupo</button>
        </span>

        <p>Crie um grupo e comece a anotar agora mesmo.</p>

        <p className="highlight">
          <span>{gruposTotais}</span> grupos atuais I{" "}
          <span>{mediaCaracteres}</span> média de caracteres
        </p>
      </div>

      <div className="group-notes-container">
        {groups.map((group) => (
          <div
            key={group.id}
            className="group-notes"
            onClick={() => selecionarGrupo(group.id)}
          >
            <img src={Logo} />

            <div>
              <h3>{group.titulo}</h3>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#52617A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />

                  <line x1="16" y1="2" x2="16" y2="6" />

                  <line x1="8" y1="2" x2="8" y2="6" />

                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>

                {new Date(group.dataCriacao).toLocaleDateString("pt-BR")}
              </p>

              <p>{group.texto.length} caracteres</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotesSection;
