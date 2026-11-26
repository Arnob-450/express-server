import { pool } from "../../db";
import {
  type Request,
  type Response,
} from "express";
import { userService } from "./user.service";
const createUser = async (req:Request, res:Response) => {
  try {
     
    const result = await userService.createUserIntoDB(req.body)

    res.status(201).json({
      success: true,
      message: "User created!!!",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

const getAllUsers=  async (req:Request, res:Response) => {
  console.log("From controller", req.user );
  try {
     const result = await userService.getAllUsersFromDb();
     if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully ",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

const getUserBYId =  async (req:Request, res:Response) => {
  try {
    const { id } = req.params;

    const result = await userService.getSingleUserFromDb(id as string);
   
     if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully ",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

const updateUser = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const result = await userService.updateUserFromDb(req.body,id as string)
     if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    res.status(201).json({
      success: true,
      message: "User update successfully ",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}
const deleteUser = async (req:Request, res:Response) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUserFromDb(id as string)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message,
      error: error,
    });
  }
}

export const userController = {
    createUser,
    getAllUsers,
    getUserBYId,
    updateUser,
    deleteUser
}