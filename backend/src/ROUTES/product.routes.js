import { getProduct, postProduct, deleteProductById, putProductById, getProductByCategory } from "../controllers/product.controller.js";
import express from "express";
import auth from "../middleware/auth.js";
import { productRouter } from "./src/routes/product.routes.js";



//RUTA GET
productRouter.get('/obtener', getProduct);

//RUTA POST
productRouter.post('/crear',auth("administrador"), postProduct);


//RUTA PUT
productRouter.put('/actualizar/:ID',auth("administrador"), putProductById);

//RUTA DELETE
productRouter.delete('/eliminar/:ID',auth("administrador"),deleteProductById);

//RUTA GET POR CATEGORIA
productRouter.get('/obtener/:categoria', getProductByCategory)

export { router as productRouter };