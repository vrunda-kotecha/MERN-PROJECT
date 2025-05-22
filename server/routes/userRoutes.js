import express from "express";
import { create1,getAll1,getOne1,update1,delete1 } from "../controller/adminController.js";
import { create2,getAll2,getOne2,update2,delete2 } from "../controller/cartController.js";
import { create3,getAll3,getOne3,update3,delete3 } from "../controller/categoryController.js";
import { create4,getAll4,getOne4,update4,delete4 } from "../controller/orderController.js";
import { create5,getAll5,getOne5,update5,delete5 } from "../controller/userController.js";

const route = express.Router();

route.post("/create1", create1);
route.post("/create2", create2);
route.post("/create3", create3);
route.post("/create4", create4);
route.post("/create5", create5);

route.get("/getall1", getAll1);
route.get("/getall2", getAll2);
route.get("/getall3", getAll3);
route.get("/getall4", getAll4);
route.get("/getall5", getAll5);

route.get("/getone1/:id", getOne1);
route.get("/getone2/:id", getOne2);
route.get("/getone3/:id", getOne3);
route.get("/getone4/:id", getOne4);
route.get("/getone5/:id", getOne5);

route.put("/update1/:id", update1);
route.put("/update2/:id", update2);
route.put("/update3/:id", update3);
route.put("/update4/:id", update4);
route.put("/update5/:id", update5);

route.delete("/delete1/:id", delete1);
route.delete("/delete2/:id", delete2);
route.delete("/delete3/:id", delete3);
route.delete("/delete4/:id", delete4);
route.delete("/delete5/:id", delete5);

export default route;