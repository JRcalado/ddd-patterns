import Order from "./order";
import OrderItem from "./order_item";

describe("Oder unit tests", () => {

    it('Should throw error when name is empty', () => {

        expect(() => {

            let order = new Order("","123", []);
        }).toThrowError("Id is required");
     
    });

    it('Should throw error when customerId is empty', () => {

        expect(() => {

            let order = new Order("123","", []);
        }).toThrowError("CustumerId is required");
     
    });
    

    it('Should throw error when Item is empty', () => {

        expect(() => {

            let order = new Order("123","1233", []);
        }).toThrowError("Item qtd must be greater than 0");
     
    });

    it('Should calculate total', () => {

        const item = new OrderItem("i1","Item 1",100, "p1", 2);
        const item2 = new OrderItem("i2","Item 2",200);
        const order = new Order("o1","c1",[item]);
      
        let total = order.total();

        expect(total).toBe(100);

      
        const order2 = new Order("o2","c2",[item, item2]);
        total =  order2.total();
        expect(total).toBe(300);
     
    });


});