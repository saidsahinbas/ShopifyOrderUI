export class Variant {
  constructor(
    public id: number,
    public sku: string,
    public title: string,
    public price: number,
    public fulfillmentService: string,
    public barcode: string,
    public taxable: boolean,
    public inventoryQuantity: number
  ) {}
}
