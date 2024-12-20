const express = require("express");
const { signUP, admin, login, logout, loginfile, header, blog,addproducts, alldata, delet, update, updateProductForm } = require("../controller/Controller");

const UserRouter = express.Router();

UserRouter.post("/signUP", signUP); 
UserRouter.get("/signUP", admin);   
UserRouter.post("/login", login);
UserRouter.get("/login", loginfile);
UserRouter.get("/", header);
UserRouter.post("/logout", logout);
UserRouter.get("/blog",blog)
UserRouter.post("/addproduct", addproducts);
UserRouter.get("/data",alldata)
UserRouter.post("/delet", delet); 
UserRouter.get("/update/:id", updateProductForm); 
UserRouter.post("/update", update);


module.exports = UserRouter;
