-- Creación de la base de datos
CREATE DATABASE restaurante;
USE restaurante;

--Creación de la tabla menú
CREATE TABLE Menu (
    tipo VARCHAR(255),
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    CONSTRAINT pk_menu_tipo PRIMARY KEY(tipo)
);

--Creación de la tabla de bebidas
CREATE TABLE Bebida (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    pais_origen VARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    temperatura ENUM(
        'Fría', 
        'Del tiempo', 
        'Caliente'
    ) NOT NULL,
    con_o_sin_hielo ENUM(
        'Con hielo', 
        'Sin hielo'
    ) NOT NULL,
    CONSTRAINT pk_bebida_id PRIMARY KEY (id)
);

--Creación de la tabla de platos principales
CREATE TABLE Plato_principal (
    nombre VARCHAR(255) NOT NULL,
    pais_origen VARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    CONSTRAINT pk_plato_principal_nombre PRIMARY KEY (nombre)
);

--Creación de la tabla de postres
CREATE TABLE Postre (
    nombre VARCHAR(255) NOT NULL,
    pais_origen VARCHAR(255) NOT NULL,
    precio FLOAT NOT NULL,
    con_o_sin_azucar ENUM(
        'Con azúcar', 
        'Sin azúcar'
    ) NOT NULL,
    CONSTRAINT pk_postre_nombre PRIMARY KEY (nombre)
);

--Creación de la tabla de ingredientes
CREATE TABLE Ingrediente (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    tipo ENUM(
        'Proteínas',
        'Carbohidratos/Almidones',
        'Grasas/Lácteos',
        'Verduras y Frutas',
        'Condimentos/Salsas/Especias'
    ) NOT NULL,
    CONSTRAINT pk_ingrediente_id PRIMARY KEY (id)
);

-- Añadir bebidas
INSERT INTO Bebida (nombre, pais_origen, precio, temperatura, con_o_sin_hielo) VALUES 
--Agua
('Agua mineral', 'España', 1.0, 'Fría', 'Con hielo'),
('Agua mineral', 'España', 1.0, 'Del tiempo', 'Sin hielo'),
('Agua mineral', 'España', 1.0, 'Fría', 'Sin hielo'),
('Agua mineral', 'España', 1.0, 'Del tiempo', 'Con hielo'),

--Zumos
('Zumo de naranja/piña/melocotón/manzana', 'España', 1.5, 'Fría', 'Sin hielo'),
('Zumo de naranja/piña/melocotón/manzana', 'España', 1.5, 'Del tiempo', 'Sin hielo'),
('Zumo de naranja/piña/melocotón/manzana', 'España', 1.5, 'Fría', 'Sin hielo'),
('Zumo de naranja/piña/melocotón/manzana', 'España', 1.5, 'Del tiempo', 'Sin hielo'),

--Refrescos
('Té helado', 'Reino Unido', 2.75, 'Fría', 'Con hielo'),
('Té helado', 'Reino Unido', 2.75, 'Del tiempo', 'Sin hielo'),
('Té helado', 'Reino Unido', 2.75, 'Fría', 'Sin hielo'),
('Té helado', 'Reino Unido', 2.75, 'Del tiempo', 'Con hielo'),

('Aquarius naranja/limón', 'España', 2.5, 'Fría', 'Con hielo'),
('Aquarius naranja/limón', 'España', 2.5, 'Del tiempo', 'Sin hielo'),
('Aquarius naranja/limón', 'España', 2.5, 'Fría', 'Sin hielo'),
('Aquarius naranja/limón', 'España', 2.5, 'Del tiempo', 'Con hielo'),

('Fanta de naranja/limón', 'Alemania', 2.5, 'Fría', 'Con hielo'),
('Fanta de naranja/limón', 'Alemania', 2.5, 'Del tiempo', 'Sin hielo'),
('Fanta de naranja/limón', 'Alemania', 2.5, 'Fría', 'Sin hielo'),
('Fanta de naranja/limón', 'Alemania', 2.5, 'Del tiempo', 'Con hielo'),

('Coca-Cola', 'Estados Unidos', 2.5, 'Fría', 'Con hielo'),
('Coca-Cola', 'Estados Unidos', 2.5, 'Del tiempo', 'Sin hielo'),
('Coca-Cola', 'Estados Unidos', 2.5, 'Fría', 'Sin hielo'),
('Coca-Cola', 'Estados Unidos', 2.5, 'Del tiempo', 'Con hielo'),

--Cafés
('Cappuccino caliente', 'Italia', 2.75, 'Caliente', 'Sin hielo'),
('Cappuccino frío', 'Italia', 2.8, 'Fría', 'Con hielo'),
('Café con leche caliente', 'España', 2.0, 'Caliente', 'Sin hielo'),
('Café con leche frío', 'España', 2.15, 'Fría', 'Con hielo'),
('Latte caliente', 'Italia', 2.5, 'Caliente', 'Sin hielo'),
('Latte frío', 'Italia', 2.7, 'Fría', 'Con hielo'),
('Americano caliente', 'EEUU', 2.5, 'Caliente', 'Sin hielo'),
('Americano frío', 'EEUU', 2.55, 'Fría', 'Con hielo');

-- Añadir postres
INSERT INTO Postre (nombre, pais_origen, precio, con_o_sin_azucar) VALUES 
('Tarta de queso', 'España', 5.0, 'Con azúcar'),
('Brownie de chocolate', 'Estados Unidos', 4.0, 'Con azúcar'),
('Flan casero', 'España', 2.5, 'Con azúcar'),
('Natillas caseras', 'España', 2.0, 'Con azúcar'),
('Yogur natural', 'Grecia', 2.5, 'Sin azúcar'),
('Tiramisú', 'Italia', 4.9, 'Con azúcar'),
('Helado de vainilla/nata/chocolate/fresa', 'Estados Unidos', 1.9, 'Con azúcar'),
('Fruta fresca', 'España', 1.0, 'Sin azúcar');

-- Añadir Platos principales
INSERT INTO Plato_principal (nombre, pais_origen, precio) VALUES
('Paella valenciana', 'España', 12.5),
('Spaghetti carbonara', 'Italia', 11.0),
('Pizza', 'Italia', 12.0),
('Hamburguesa clásica', 'Estados Unidos', 10.5),
('Pollo al curry', 'India', 13.0),
('Sushi variado', 'Japón', 13.5),
('Tacos mexicanos', 'México', 9.5);

-- Añadir ingredientes
INSERT INTO Ingrediente (nombre, tipo) VALUES
('Pollo', 'Proteínas'),
('Ternera', 'Proteínas'),
('Atún', 'Proteínas'),
-- Carbohidratos
('Arroz', 'Carbohidratos/Almidones'),
('Pasta', 'Carbohidratos/Almidones'),
('Patata', 'Carbohidratos/Almidones'),
-- Grasas / Lácteos
('Queso', 'Grasas/Lácteos'),
('Nata', 'Grasas/Lácteos'),
-- Verduras y frutas
('Tomate', 'Verduras y Frutas'),
('Cebolla', 'Verduras y Frutas'),
('Pimiento', 'Verduras y Frutas'),
-- Condimentos
('Sal', 'Condimentos/Salsas/Especias'),
('Pimienta', 'Condimentos/Salsas/Especias'),
('Aceite de oliva', 'Condimentos/Salsas/Especias');

-- Añadir menúes
INSERT INTO Menu (tipo, nombre, descripcion) VALUES
('Clásico', 'Menú clásico', 'Incluye platos tradicionales españoles y de otros países'),
('Vegano', 'Menú vegano', 'Platos sin productos de origen animal'),
('Sin alérgenos', 'Menú sin alérgenos', 'Apto para personas con alergias alimentarias');