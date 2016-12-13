BEGIN;

DROP TABLE IF EXISTS wishlist;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  f_name TEXT NOT NULL,
  l_name TEXT NOT NULL,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  phonenumber VARCHAR NOT NULL
);

CREATE TABLE wishlist(
  wishlist_id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  img VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  user_id INT REFERENCES users ON DELETE CASCADE
);

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  img TEXT NOT NULL,
  url TEXT NOT NULL,
  price VARCHAR NOT NULL,
  category VARCHAR NOT NULL
);

COPY products (title, img, url, price, category)
FROM '/Users/donaldhighe/code/wdi/project4/react-deals/db/seeds.csv' with (format csv, delimiter ',');

COMMIT;
