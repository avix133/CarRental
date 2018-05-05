delete from car_photo;
delete from car;
delete from car_type;

ALTER TABLE car_photo AUTO_INCREMENT = 1;
ALTER TABLE car AUTO_INCREMENT = 1;
ALTER TABLE car_type AUTO_INCREMENT = 1;

INSERT INTO car_type
  (mark, model, year)
VALUES
  ("Honda", "Civic", 2013),
  ("Toyota", "Camry", 2014),
  ("Ford", "F150", 2015),
  ("Jeep", "Grand Cherokee", 2015),
  ("Toyota", "Corolla", 2015);

INSERT INTO car
  (model, reg_no, rate)
VALUES
  (1, "KRK 1111", 80),
  (3, "KRK 2222", 90),
  (4, "KRK 3333", 125),
  (2, "KRK 4444", 95),
  (5, "KRK 5555", 90),
  (1, "KRK 6666", 85),
  (3, "KRK 7777", 90);

INSERT INTO car_photo
  (car_id, photo)
VALUES
  (1, "photo1"),
  (2, "photo2"),
  (3, "photo3"),
  (4, "photo4"),
  (5, "photo5"),
  (6, "photo6");