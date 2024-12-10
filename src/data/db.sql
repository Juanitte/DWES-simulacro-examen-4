DROP DATABASE IF EXISTS escuela;

CREATE DATABASE escuela;
USE escuela;


CREATE TABLE alumnos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    localidad VARCHAR(200),
    fecha_de_nacimiento DATE
);


INSERT INTO alumnos (nombre, localidad, fecha_de_nacimiento) 
VALUES 
  ('Pedro', 'Madrid', '1990-01-01'),
  ('Ana', 'Barcelona', '1995-02-02'),
  ('Juan', 'Valencia', '1980-03-03');

CREATE TABLE profesores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    especialidad VARCHAR(200),
    estado_civil ENUM('SOLTERO', 'CASADO', 'VIUDO')
);

INSERT INTO profesores (nombre, especialidad, estado_civil) 
VALUES 
  ('Rafael', 'Matematicas', 'SOLTERO'),
  ('David', 'Fisica', 'CASADO'),
  ('Carlos', 'Quimica', 'VIUDO');