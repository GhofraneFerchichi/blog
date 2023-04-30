import {libCategory} from "./libCategory";
import {libFile} from "./libFile";

export class libElement {
  id!: number;
  name!: string;
  fileType !: string;
  rating!: number;
  isApproved!: boolean;
  libCategory!: libCategory;
  libFiles!: libFile;




}
