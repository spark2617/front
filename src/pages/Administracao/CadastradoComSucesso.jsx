import "./CadastradoComSucesso.scss";
import verificado  from "../../images/verificado.png"

export function CadastradoComSucesso() {
  return (
    <>
    <div className="success-container">
      <div className="success-container__content">
        <img
          src={verificado}
          alt="Checado"
          className="success-container__content__checked"
        />
        <h1 className="success-container__content__title">
          Sua propriedade foi criada com sucesso.
        </h1>
        <a href="/">
          <button className="success-container__content__button">
           Voltar
          </button>
        </a>
      </div>
    </div>
    <br />
    </>
  );
}

export default CadastradoComSucesso;