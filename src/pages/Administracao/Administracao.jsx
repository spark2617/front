import { Form, Container, Row, FloatingLabel, Button } from "react-bootstrap";
import HeaderAdministracao from "./HeaderAdministracao";




function Administracao() {
    return (
        <>
            <HeaderAdministracao />
            <Container>
                <h2 className="p-3 mb-2">Criar Propriedade</h2>
                <Form className="row border rounded shadow-sm mx-auto p-3 mb-5">
                    <Row>
                        <Form.Group className="col">
                            <Form.Label>Nome da Propriedade</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select id="categoria">
                                <option>Menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="col">
                            <Form.Label>Endereço</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Select id="categoria">
                                <option>Menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group className="">
                        <Form.Label>Descrição</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Escreva aqui">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <h3 className="mt-3 p-1 mb-1">Adicionar atributos</h3>
                    <Container className="row mx-auto border rounded shadow-sm p-2 bg-light">
                        <Form.Group className="col">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className="col position-relative mb-3">
                            <Form.Label>Icone</Form.Label>
                            <Form.Control
                                type="file"
                                required
                                name="file"
                            // onChange={handleChange}
                            // isInvalid={!!errors.file}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {/* {errors.file} */}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Container>
                    <h3 className="mt-3 p-1 mb-1">Política do Produto</h3>
                    <Container className="row border rounded shadow-sm p-2 pb-3 bg-light mx-auto">
                        <Form.Group className="col">
                            <Form.Label>Regras de Casa</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Descrição">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>Saúde e segurança</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Descrição">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="col">
                            <Form.Label>Política de Cancelamento</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Descrição">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Container>
                    <h3 className="mt-3 p-1 mb-1">Carregar Imagens</h3>
                    <Container className="row border rounded shadow-sm p-2 bg-light mx-auto">
                        <Form.Group className="col position-relative mb-3 mt-3">
                            <Form.Control
                                type="file"
                                required
                                name="file"
                                label="Insira https"
                            // onChange={handleChange}
                            // isInvalid={!!errors.file}
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                                {/* {errors.file} */}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Container>
                    <Button className="mx-auto mt-4" style={{width: "200px"}}>Criar</Button>
                </Form>
            </Container>
        </>
    )
}

export default Administracao;

// import { useCallback, useEffect, useState } from "react";
// import { Checkbox, FormControlLabel ,Input, Select, MenuItem, TextField } from '@mui/material'
// import { Formik, ErrorMessage, Form, FieldArray } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import HeaderAdministracao from "./HeaderAdministracao";
// import Button from "react-bootstrap/Button"

// import "./Adm.scss";
// // import { CategoriesAPI } from "../../services/categories";
// // import { MetaversesAPI } from "../../services/metaverses";

// // import  ChevronDownSvg  from "../../images/chevron-down.svg";
// // import {ReactComponent as Adicionar}  from "../../images/adicionar.svg";
// // import {ReactComponent as CloseSvg}  from "../../images/close.svg";
// // import { NumberInput } from "../../components/NumberInput/index.js";
// // import { AttributesAPI } from "../../services/attributes";
// // import { LandsAPI } from "../../services/lands";


// // import { useAuth } from "../../providers/AuthProvider";

// const initialValues = {
//     name: "",
//     category: "", //consome a API de categorias
//     metaverse: "", //consome a API de cidades
//     description: "",
//     localizationX: "",
//     localizationY: "",
//     attributes: [],
//     images: [{ url: ''}], //com botão de adicionar mais imagens até 5
//     // imagesLink: "", //com botão de adicionar mais imagens até 5
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Digite seu primeiro nome"),
//     category: Yup.string().required("Digite seu último nome"),
//     metaverse: Yup.string().required("Escolha o metaverso"),
//     description: Yup.string().required("Digite a descrição do terreno"),
//     localizationX: Yup.string().required("Digite a coordenada X"),
//     localizationY: Yup.string().required("Digite a coordenada Y"),
//     price: Yup.number().min(1).required("Digite o valor"),
//     attributes: Yup.array().of(Yup.string()).test({
//       name: 'attributes',
//       test: (value) => {
//         return value.length > 0
//       },
//       message: 'Escolha os atributos',
//     }).required(),
//     images: Yup.array().of(
//       Yup.object().shape({
//         url: Yup.string(),
//         title: Yup.string(),
//       })
//     ).test({
//       name: 'images',
//       test: (value) => {
//         const filledImages = value.filter(image => image.url)
//         return filledImages.length >= 5
//       },
//       message: 'Insira 5 URLs da imagem do terreno',
//     })
//   });

// export function Administracao() {
//   const navigate = useNavigate()
//   const [categories, setCategories] = useState([])
//   const [metaverses, setMetaverses] = useState([])
//   const [attributes, setAttributes] = useState([])

//   const fetchCategoriesAndMetaverses = useCallback(async () => {
//     const [categoriesResponse, metaversesResponse, attributesResponse] = await Promise.all([
//       CategoriesAPI.getCategories(),
//       MetaversesAPI.getMetaverses(),
//       AttributesAPI.getAttributes()
//     ])
    
//     setCategories(categoriesResponse.data.content)
//     setMetaverses(metaversesResponse.data.content)
//     setAttributes(attributesResponse.data)
//   }, [])

//   useEffect(() => {
//     fetchCategoriesAndMetaverses()
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const handleSubmit = async (values) => {
//     const payload = {
//       ...values,
//       price: parseFloat(values.price),
//       attributes: values.attributes.map(attribute => ({ id: attribute })),
//       category: { id: values.category },
//       metaverse: { id: values.metaverse },
//       images: values.images.filter(image => image.url).map((image, index) => ({ title: `${values.name}-${index}`, url: image.url }))
//     }
    
//     await LandsAPI.registerLand(payload)
//       .then(() => navigate('/success'))
//       .catch(() => {
//         toast("Infelizmente, o produto não pôde ser criado. Por favor, tente novamente mais tarde.", {
//           type: "warning",
//           theme: "dark",
//         });
//       })
//   }

//   return (
//     <div className="terrain-container">

//         <HeaderAdministracao />
//       <h1 className="terrain-container__title">ADMINISTRAÇÃO DE TERRENOS</h1>
//       <h2  className="terrain-container__subtitle">CADASTRAR TERRENO</h2>

//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         {({ values, handleChange, errors }) => (
//           <Form className="terrain-container__form">
//             <div className="terrain-container__input-content">
//               <div>
//                 <label htmlFor="name" className="terrain-container__form--label">nome</label>
//                 <Input 
//                   name="name" variant="filled"  className="terrain-container__form--input" value={values.name}  onChange={handleChange} />
//                 <ErrorMessage
//                   name="name"
//                   component="span"
//                   className="terrain-container__error-message"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="category" className="terrain-container__form--label">categoria</label>
//                 <Select name="category" className="terrain-container__form--select" endAdornment={} MenuProps={{
//                   classes: {
//                     paper: 'terrain-container__form--select-dropdown'
//                   }
//                 }} value={values.category} onChange={handleChange}>
//                   {categories.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem> )}
//                 </Select>
//                 <ErrorMessage
//                   name="category"
//                   component="span"
//                   className="terrain-container__error-message"
//                 />
//               </div>
              
//               <div>
                
//                 <div className="terrain-container__form--field-grid">
//                   <div className="terrain-container__form--field-group">
//                     <div>
//                       <label className="terrain-container__form--label">localização (X, Y)</label>
//                       <Input name="localizationX" placeholder="(X)" className="terrain-container__form--input" value={values.localizationX} onChange={handleChange} />
//                       <ErrorMessage
//                         name="localizationX"
//                         component="span"
//                         className="terrain-container__error-message"
//                       />
//                     </div>
//                     <div>
//                     <label className="terrain-container__form--label" />
//                       <Input name="localizationY"  placeholder="(Y)" className="terrain-container__form--input" value={values.localizationY} onChange={handleChange} />
//                       <ErrorMessage
//                         name="localizationY"
//                         component="span"
//                         className="terrain-container__error-message"
//                       />
//                     </div>
//                   </div>
//                   <div className="terrain-container__form--field-group--price">
//                     <label htmlFor="price" className="terrain-container__form--label">Preço por diária</label>
//                     <ErrorMessage
//                       name="price"
//                       component="span"
//                       className="terrain-container__error-message"
//                     />
//                   </div>
                  
//                 </div>
//               </div>
              
//               <div>
//                 <label htmlFor="metaverse" className="terrain-container__form--label">metaverso</label>
//                 <Select name="metaverse" value={values.metaverse} onChange={handleChange} className="terrain-container__form--select" endAdornment={<ChevronDownSvg />}>
//                   {metaverses.map(metaverse => <MenuItem key={metaverse.id} value={metaverse.id}>{metaverse.name}</MenuItem> )}
//                 </Select>
//                 <ErrorMessage
//                   name="metaverse"
//                   component="span"
//                   className="terrain-container__error-message"
//                 />
//               </div>
             
//             </div> 
            

//             <label htmlFor="description" className="terrain-container__form--label">descrição</label>
//             <TextField
//               className="terrain-container__form--textarea" 
//               multiline 
//               name="description" 
//               value={values.description} 
//               onChange={handleChange} 
//               rows={6}   
//             />
//             <ErrorMessage
//               name="description"
//               component="span"
//               className="terrain-container__error-message"
//             />

//             <strong className="terrain-container__form--body-text">ATRIBUTOS</strong>

//             <div className="terrain-container__form--checkbox">
//               {attributes.map(attribute => (
//                 <FormControlLabel
//                   key={attribute.id} 
//                   control={
//                     <Checkbox 
//                       name="attributes" 
//                       value={attribute.id}
//                       onChange={handleChange} 
//                       sx={{
//                         color: '#FFF',
//                         '&.Mui-checked': {
//                           color: '#FFF',
//                         },
//                       }} 
//                     />
//                   }
//                   label={attribute.name} 
//                 />
//               ))}
           
//             </div>
//             <ErrorMessage
//                 name="attributes"
//                 component="span"
//                 className="terrain-container__error-message"
//               />

//             <strong className="terrain-container__form--body-text images-title">ADICIONAR URL DE IMAGENS</strong>

//             <FieldArray name="images">
//               {({ push, remove }) => {
//                 return (
//                     values.images.map((_images, index) => (
//                         <Input
//                            key={index} 
//                           name={`images.${index}.url`} 
//                           value={values.images[index].url} 
//                           onChange={handleChange}
//                           className="terrain-container__form--input images" 
//                           endAdornment={
//                             index === values.images.length - 1 
//                              ? values.images.length <= 4 
//                                 ?  < Button onClick={() => {if (values.images.length < 5) push({ url: '' }) }} />  
//                                 : < Button onClick={() => remove(index)} />
//                              : <Button onClick={() => remove(index)} /> } 
//                         />
//                     ))
//                 )
//               }}
//             </FieldArray>
//             <ErrorMessage
//               name="images"
//               component="span"
//               className="terrain-container__error-message"
//             />

//             <button type="submit" className="terrain-container__form--button">Cadastrar terreno</button>

  
//           </Form>
//         )}
//       </Formik>
//     </div>
    
//   )
// }

// export default Administracao;
