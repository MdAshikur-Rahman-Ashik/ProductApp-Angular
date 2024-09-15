import { Product } from "./product";

export interface ProductCategory {
    productCategoryID: number;
    name: string;
    products:Product[];
}
