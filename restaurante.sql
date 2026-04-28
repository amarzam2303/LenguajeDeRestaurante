-- Creación de la base de datos
CREATE DATABASE restaurante;
USE restaurante;

--Creación de la tabla menú
CREATE TABLE Menu (
    tipo NVARCHAR(255),
    nombre NVARCHAR(255) NOT NULL,
    descripcion NVARCHAR(255) NOT NULL,
    CONSTRAINT pk_menu_tipo PRIMARY KEY(tipo)
);

CREATE TABLE Bebida (
    nombre NVARCHAR(255) NOT NULL,
    pais_origen NVARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    temperatura NVARCHAR (255) NOT NULL,
    con_o_sin_hielo NVARCHAR (255) NOT NULL,
    CONSTRAINT pk_bebida_nombre PRIMARY KEY (nombre),
    CONSTRAINT ch_bebida_temperatura CHECK (temperatura IN('Fría', 'Del tiempo')),
    CONSTRAINT ch_bebida_con_o_sin_hielo CHECK (con_o_sin_hielo IN('Con hielo', 'Sin hielo'))
);

CREATE TABLE Plato_principal (
    nombre NVARCHAR(255) NOT NULL,
    pais_origen NVARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    CONSTRAINT pk_plato_principal_nombre PRIMARY KEY (nombre)
);

CREATE TABLE Postre (
    nombre NVARCHAR(255) NOT NULL,
    pais_origen NVARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    con_o_sin_azucar NVARCHAR (255) NOT NULL,
    CONSTRAINT pk_postre_nombre PRIMARY KEY (nombre),
    CONSTRAINT ch_postre_con_o_sin_azucar CHECK (con_o_sin_azucar IN('Con azúcar', 'Sin azúcar'))
);

CREATE TABLE Ingrediente (
    id IDENTITY(1,1),
    nombre NVARCHAR(255) NOT NULL,
    tipo NVARCHAR(255) NOT NULL,
    CONSTRAINT pk_ingrediente_id PRIMARY KEY (id),
    CONSTRAINT ch_ingrediente_tipo CHECK (tipo IN('Proteínas', 'Carbohidratos/Almidones', 'Grasas/Lácteos', 'Verduras y Frutas', 'Condimentos/Salsas/Especias'))
);