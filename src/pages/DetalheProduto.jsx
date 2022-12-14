import { Container } from "react-bootstrap"
import BlocoDeLocalizacao from "../components/Localizacao/BlocoDeLocalizacao"
import HeaderDetalheProduto from "../components/DetalheProdutoH/HeaderDetalheProduto"
import ProdutoImg from "../components/ProdutoImg/ProdutoImg"
// import { ProdContext } from "../contexts/ProdContext"
import { useParams } from "react-router-dom"
// import { useFetch } from "../components/useHook/useFetch"
import LoadingBar from "../components/loading"
import Reserva from "../components/Reserva/Reserva"
import ProdutoCaract from "../components/ProdutoCaract/ProdutoCaract"
import ProdutoDescription from "../components/ProdutoDescription/ProdutoDescription"
import ProdutoPolitica from "../components/ProdutoPolitica/ProdutoPolitica"
import { useEffect, useState } from "react"
import Galeria from "../components/ProdutoImg/galeria"
function DetalheProduto() {
  // const { BASE_URL, PRODUCTOS_ENDPOINT, RESERVAS_ENDPOINT } = environment;
  // const { id_producto } = useParams();
  // const {
  //   data: producto,
  //   isLoading,
  //   error,
  // } = useFetch(`${BASE_URL}${PRODUCTOS_ENDPOINT}${id_producto}`);
  // const { data: reservas } = useFetch(
  //   `${BASE_URL}${RESERVAS_ENDPOINT}porProducto/${id_producto}`
  // );

  // const { newProd } = useContext(ProdContext);
  // useEffect(() => {
  //   newProd(producto, reservas);
  // }, [producto, reservas, newProd]);
  //       <>
  //       {isLoading ? (
  //           <LoadingBar />
  //         ) : error ? (
  //           <Error info={"Erro ao carregar este produto"} />
  //         ) : (
  // )}
  // </>
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://44.198.85.244:9000/product/${id}`).then((response) => response.json().then((data) => setApi(data)))
  }, [])

  const [useApi, setApi] = useState([]);
  

  // const imgList = useApi.images?.map((img) => ({
  //   img: img.url_img,
  //   titulo: img.title,
  // }));
   console.log(useApi)

  return (
    <> 
      <HeaderDetalheProduto nome={useApi.product_name} category={useApi.zone_id}/>
      <ProdutoImg images={useApi.images} />
      <BlocoDeLocalizacao />
      
      <Reserva />
      {/*<ProdutoCaract />*/}
      <ProdutoDescription descricao={useApi.product_description} nome={useApi.product_name} />
      <ProdutoPolitica />
    </>

  );
}

export default DetalheProduto