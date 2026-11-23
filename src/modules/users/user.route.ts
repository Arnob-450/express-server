import { Router } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";

const router = Router()

// /api/v1/users/:id

router.post("/", userController.createUser );
router.get("/",userController.getAllUsers);
router.get("/:id",userController.getUserBYId);
router.put("/:id",userController.updateUser);
router.delete("/:id",userController.deleteUser );



export const userRoute = router