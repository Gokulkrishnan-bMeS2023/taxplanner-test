import * as Yup from "yup";

declare module "yup" {
  interface StringSchema {
    unique(message: string, list: any[]): this;
  }
}
