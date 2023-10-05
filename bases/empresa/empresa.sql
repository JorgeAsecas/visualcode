DROP TABLE IF EXISTS departamentos CASCADE;

CREATE TABLE departamentos (
    id              BIGSERIAL PRIMARY KEY,
    codigo          NUMERIC(2) NOT NULL UNIQUE,
    denominacion    VARCHAR(255) NOT NULL,
    localidad       VARCHAR(255)

);

INSERT INTO departamentos (codigo, denominacion, localidad)
    VALUES  (10, 'informatica', 'Sanlucar'),
            (20, 'administrativo', 'Jerez'),
            (30, 'prevencion', 'Trebujena'),
            (40, 'laboratorio', 'Chipiona');
