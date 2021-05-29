import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type IData = {
  books: string[];
  poems: string[];
  tasks: string[];
};

const initialState: IData = {
  books: [
    `Lorem ipsum dolor adipisicing elit. nesciunt repudiandae  `,
    `Sit amet consectetur harum numquam voluptate`,
    `Perferendis temporibus nostrum Id a nisi  quaerat`,
    `Eius fuga laudantium deserunt placeat consectetur.`,
    `Doloremque quibusdam doloribus illo sit enim`,
    `pariatur officiis tempore porro quae, earum cum iusto?  `,
  ],
  poems: [
    `Lorem ipsum dolor adipisicing elit. nesciunt repudiandae  `,
    `Sit amet consectetur harum numquam voluptate`,
    `Perferendis temporibus nostrum Id a nisi  quaerat`,
    `Eius fuga laudantium deserunt placeat consectetur.`,
    `Doloremque quibusdam doloribus illo sit enim`,
    `pariatur officiis tempore porro quae, earum cum iusto?  `,
  ],
  tasks: [
    `Lorem ipsum dolor adipisicing elit. nesciunt repudiandae  `,
    `Sit amet consectetur harum numquam voluptate`,
    `Perferendis temporibus nostrum Id a nisi  quaerat`,
    `Eius fuga laudantium deserunt placeat consectetur.`,
    `Doloremque quibusdam doloribus illo sit enim`,
    `pariatur officiis tempore porro quae, earum cum iusto?  `,
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;

export const getTasks = (state: RootState) => state.data.tasks;
export const getBooks = (state: RootState) => state.data.books;
export const getPoems = (state: RootState) => state.data.poems;
