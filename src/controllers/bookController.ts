import { Request, Response } from "express";
import {create, getAll, delBook} from "../services/bookService";
import logger from "../utils/logger";

/**
 *
 * @param req
 * @param res
 */
const createBook = async (req: Request, res: Response) => {
  try {
    const result = await create(req, res);
    res.json(result);
  } catch (err: any) {
    logger.error(`An error occured ${err.message}`);
    res.status(400).json({
      message: "An error occured",
      error: err.message,
    });
  }
};
/**
 *
 * @param req
 * @param res
 */
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await getAll(req, res);
    res.json(result);
  } catch (err: any) {
    logger.error(`An error occured ${err.message}`);
    res.status(400).json({
      message: "An error occured",
      error: err.message,
    });
  }
};
/**
 *
 * @param req
 * @param res
 */
const deleteBook = async (req: Request, res: Response) => {
    const bookId: string = req.query;
  try {
    await delBook(req, res, bookId);
    res.json({message: "Book deleted successfully"});
  } catch (err: any) {
    logger.error(`An error occured ${err.message}`);
    res.status(400).json({
      message: "An error occured",
      error: err.message,
    });
  }
};
module.exports = { createBook, getAllBooks, deleteBook };
