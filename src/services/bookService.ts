import {Request, Response} from "express";
import Book from "../models/book";
import { getPagination } from "../utils/helper";
import { Pagination } from "../types/pagination.type";

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
const create = async (req: Request, res: Response) => {
    const {title, author_name, publication_year, isbn, num_pages} = req.body;
    const book: any = await Book.create({
        title,
        author_name,
        publication_year,
        isbn,
        num_pages
    });
    return book;
}

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
const getAll = async (req: Request, res: Response) => {
    const { page, size }: Pagination = req.query;
    const { limit, offset } = getPagination(page, size);
    const customLabel = {
      docs: "books",
    };
    return await Book.paginate(
      {},
      { offset, limit, customLabels: customLabel },
    );
};

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
const delBook = async (req: Request, res: Response) => {
    const { id }: any = req.params;
    console.log("id", id);
    if(!('id' in req.params)){
        throw new Error(
            "Book ID is required!"
        )
    }
    const book: any = Book.findOne({ _id: id });
    if(!book){
         throw new Error(
            "Book Not Found!"
        )
    }
    // Delete video from Database
    return await Book.findByIdAndDelete(id);

}

module.exports = {create, getAll, delBook}