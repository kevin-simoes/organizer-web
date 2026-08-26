import "./Popup.css"
import "../styles/responsive.css";

const Popup = ({
    currentGroup,
    changeTittle,
    changeText,
    closePopup,
    deleteGroup,
  }) => {
    return (
      <div className="popup-overlay">
        <div className="popup">
  
          <div className="popup-header">
            <input
              value={currentGroup.titulo}
              onChange={(e) => changeTittle(e.target.value)}
            />
  
            <button
              className="popup-fechar"
              onClick={closePopup}
            >
              ×
            </button>
          </div>
  
          <div className="popup-info">
            <p>Grupo criado em</p>
           {new Date(currentGroup.dataCriacao).toLocaleDateString("pt-BR")}
          </div>
  
          <div className="textarea-container">
            <textarea
              value={currentGroup.texto}
              onChange={(e) => changeText(e.target.value)}
              placeholder="Digite sua anotação..."
              maxLength={500}
            />
  
            <span>
              {currentGroup.texto.length} / 500
            </span>
          </div>
  
          <div className="popup-botoes">
  
            <button
              className="btn-cancelar"
              onClick={closePopup}
            >
              Cancelar
            </button>
  
            <button
              className="btn-salvar"
              onClick={closePopup}
            >
              Salvar
            </button>
  
            <button
              className="btn-salvar"
              onClick={() => deleteGroup(currentGroup.id)}
            >
              Excluir
            </button>
  
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Popup;