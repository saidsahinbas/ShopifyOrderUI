export class Order {
  id: number;
  contactEmail: string;
  createdAt: Date;
  fulfilmentStatus: string;
  orderIdOnApi: number;
  orderName: string;
  paymentStatus: string;
  tax: number;
  totalPrice: number;
  constructor(
    id: number,
    contactEmail: string,
    createdAt: Date,
    fulfilmentStatus: string,
    orderIdOnApi: number,
    orderName: string,
    paymentStatus: string,
    tax: number,
    totalPrice: number
  ) {
    this.id = id;
    this.contactEmail = contactEmail;
    this.createdAt = createdAt;
    this.fulfilmentStatus = fulfilmentStatus;
    this.orderIdOnApi = orderIdOnApi;
    this.orderName = orderName;
    this.paymentStatus = paymentStatus;
    this.tax = tax;
    this.totalPrice = totalPrice;
  }
}
