import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../types";

const router = Router();

// /api/v1/users/:id





router.post("/", userController.createUser);
router.get("/", auth(USER_ROLE.admin,USER_ROLE.agent), userController.getAllUsers);
router.get("/:id",auth(USER_ROLE.admin,USER_ROLE.agent,USER_ROLE.user), userController.getUserBYId);
router.put("/:id",auth(USER_ROLE.admin,USER_ROLE.user), userController.updateUser);
router.delete("/:id",auth(USER_ROLE.admin,USER_ROLE.user), userController.deleteUser);

export const userRoute = router;
