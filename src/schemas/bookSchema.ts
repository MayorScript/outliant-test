import * as yup from "yup";

const bookSchema = yup.object({
  body: yup.object({
    title: yup.string().required("Title is required!"),
    author_name: yup.string().required("Author Name is required!"),
    publication_year: yup.string().required("Publication Year is required!"),
    isbn: yup.string().required("Isbn is required!"),
    num_pages: yup.number().required("Num of Page is required!"),
  }),
});
export default bookSchema;
