import { Image } from "./image";
import { Variant } from "./variant";

export class Product {
  constructor(
    public id: number,
    public productIdOnApi: number,
    public title: string,
    public vendor: string,
    public createdAt: string,
    public updatedAt: string,
    public publishedAt: string,
    public images: Image[],
    public variants: Variant[]
  ) {}
}
