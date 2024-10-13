select distinct maker from Product, PC where PC.speed >= 3.0 and Product.model = PC.model;

select * from Printer where price = (select max(price) from printer);

select maker from Product, Printer where price = (select min(price) from printer) and color = true and Product.model = Printer.model;

select avg(speed) from Laptop where price > 1000;