import { Player } from '@lottiefiles/react-lottie-player';
// import { metaverso } from "./../images/metaverso.json";
import "./player.css"




function Notfund () {
  return (
    <div className="404">
      <Player 
      src='https://assets4.lottiefiles.com/packages/lf20_t03tbmqu.json'
      className="player"
      loop
      autoplay/>
      <h3 className="m-5 justify-content-center d-flex"> Ops! Nao encontramos isso</h3>
    </div>
  )
}

export default Notfund;