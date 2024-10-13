-- This query retrieves the distinct maker names from the Product table 
-- where the speed of the corresponding PC is greater than or equal to 3.0.
-- It joins the Product and PC tables based on the model number.
SELECT DISTINCT maker 
FROM Product, PC 
WHERE PC.speed >= 3.0 
  AND Product.model = PC.model;

-- This query retrieves all columns from the Printer table
-- where the price is equal to the maximum price in the Printer table.
-- It uses a subquery to find the maximum price.
SELECT * 
FROM Printer 
WHERE price = (SELECT MAX(price) FROM Printer);

-- This query retrieves the maker names from the Product table
-- where the price of the corresponding Printer is equal to the minimum price, 
-- and the color is true. It joins the Product and Printer tables based on the model number.
SELECT maker 
FROM Product, Printer 
WHERE price = (SELECT MIN(price) FROM Printer) 
  AND color = true 
  AND Product.model = Printer.model;

-- This query calculates the average speed from the Laptop table
-- where the price is greater than 1000.
SELECT AVG(speed) 
FROM Laptop 
WHERE price > 1000;