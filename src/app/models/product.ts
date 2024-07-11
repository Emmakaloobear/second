export class Product {//純描述，似INTERFACE,這個專案可以把所有的INTERFACE放在這裡，讓編碼整潔，一定要用EXPORT，每個都是獨立的，如果不用的話東西是沒辦法被看到
  id: number;//型別
  title: string;
  modelName: string;
  color: string;
  productType: string;
  brand: string;
  price: number;
  constructor() {
  }
}