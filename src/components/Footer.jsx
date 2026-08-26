import "./Footer.css"
import "../styles/responsive.css";

const Footer = () => {
  return (
    <>
      <footer>

<div className="footer-top">

  <div>
    <h3>Organizer Web</h3>
    <p>Gerenciamento de anotações.</p>
  </div>

  <div className="footer-top-conect">
    <h4>Repositório</h4>

    <a href="https://github.com/kevin-simoes/organizer-web">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
    </a>
  </div>

</div>

<div className="footer-middle">

  <h3>Integrantes do Projeto</h3>

  <p>Flávia Camerim de Sousa - RM570979</p>
  <p>João Pedro Nóbrega - RM570322</p>
  <p>Kevin Simões - RM571942</p>
  <p>Luan Sá - RM569136</p>
  <p>Manuella Sousa Thomazini - RM573606</p>

</div>

<div className="footer-bottom">

  <p>
    &copy; 2026 Time IRIS. Todos os direitos reservados.
  </p>

</div>

</footer>
    </>
  )
}

export default Footer
