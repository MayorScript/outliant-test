import mongoose, {Schema, Model, Document, PaginateModel} from 'mongoose';
import {BookType} from "../types/book.type";
import paginate from "mongoose-paginate-v2";

type BookDataDocument = Document & BookType;

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author_name: {
            type: String,
            required: true
        },
        publication_year: {
            type: String,
            required: true
        },
        isbn: {
            type: String,
            required: true
        },
        num_pages: {
            type: Number,
            required: true
        }
    },
    {timestamps: true}
);
BookSchema.plugin(paginate);

const Book: Model<BookDataDocument> = mongoose.model<
  BookDataDocument,
  PaginateModel<BookDataDocument>
>("Book", BookSchema);

export default Book;