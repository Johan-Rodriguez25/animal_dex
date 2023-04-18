CREATE TABLE categorias(
  categoria_id INT NOT NULL AUTO_INCREMENT,
  categoria VARCHAR(255),
  UNIQUE (categoria_id),
  PRIMARY KEY (categoria_id)
);

CREATE TABLE clases(
  categoria_id INT,
  clase_id INT NOT NULL AUTO_INCREMENT,
  clase VARCHAR(255),
  UNIQUE (clase_id),
  PRIMARY KEY (clase_id),
  KEY (categoria_id)
);

CREATE TABLE ordenes(
  clase_id INT,
  orden_id INT NOT NULL AUTO_INCREMENT,
  orden VARCHAR(255),
  UNIQUE (orden_id),
  PRIMARY KEY (orden_id),
  KEY (clase_id)
);

CREATE TABLE familias(
  orden_id INT,
  familia_id INT NOT NULL AUTO_INCREMENT,
  familia VARCHAR(255),
  UNIQUE (familia_id),
  PRIMARY KEY (familia_id),
  KEY (orden_id)
);

CREATE TABLE tipos_registros(
  tipo_registro_id INT NOT NULL AUTO_INCREMENT,
  tipo_registro VARCHAR(255),
  abreviatura_tipo_registro VARCHAR(255),
  UNIQUE (tipo_registro_id),
  PRIMARY KEY (tipo_registro_id)
);

CREATE TABLE habitats(
  habitat_id INT NOT NULL AUTO_INCREMENT,
  habitat VARCHAR(255),
  abreviatura_habitat VARCHAR(255),
  UNIQUE (habitat_id),
  PRIMARY KEY (habitat_id)
);

CREATE TABLE estratos(
  estrato_id INT NOT NULL AUTO_INCREMENT,
  estrato VARCHAR(255),
  abreviatura_estrato VARCHAR(255),
  UNIQUE (estrato_id),
  PRIMARY KEY (estrato_id)
);

CREATE TABLE gremios_troficos(
  gremio_trofico_id INT NOT NULL AUTO_INCREMENT,
  gremio_trofico VARCHAR(255),
  abreviatura_gremio_trofico VARCHAR(255),
  UNIQUE (gremio_trofico_id),
  PRIMARY KEY (gremio_trofico_id)
);

CREATE TABLE estados_conservacion(
  estado_conservacion_id INT NOT NULL AUTO_INCREMENT,
  estado_conservacion VARCHAR(255),
  UNIQUE (estado_conservacion_id),
  PRIMARY KEY (estado_conservacion_id)
);

CREATE TABLE especies(
  familia_id INT,
  especie_id INT NOT NULL AUTO_INCREMENT,
  especie VARCHAR(255),
  nombre_comun VARCHAR(255),
  altitud_minima INT,
  altitud_maxima INT,
  estado_conservacion_id INT,
  UNIQUE (especie_id),
  PRIMARY KEY (especie_id),
  KEY (familia_id),
  KEY (estado_conservacion_id)
);

CREATE TABLE especies_tipos_registros(
  especies_tipos_registros_id INT NOT NULL AUTO_INCREMENT,
  especie_id INT,
  tipo_registro_id INT,
  UNIQUE (especies_tipos_registros_id),
  PRIMARY KEY (especies_tipos_registros_id),
  KEY (especie_id),
  KEY (tipo_registro_id)
);

CREATE TABLE especies_habitats(
  especies_habitats_id INT NOT NULL AUTO_INCREMENT,
  especie_id INT,
  habitat_id INT,
  UNIQUE (especies_habitats_id),
  PRIMARY KEY (especies_habitats_id),
  KEY (especie_id),
  KEY (habitat_id)
);

CREATE TABLE especies_estratos(
  especies_estratos_id INT NOT NULL AUTO_INCREMENT,
  especie_id INT,
  estrato_id INT,
  UNIQUE (especies_estratos_id),
  PRIMARY KEY (especies_estratos_id),
  KEY (especie_id),
  KEY (estrato_id)
);

CREATE Table especies_gremios_troficos(
  especies_gremios_troficos_id INT NOT NULL AUTO_INCREMENT,
  especie_id INT,
  gremio_trofico_id INT,
  UNIQUE (especies_gremios_troficos_id),
  PRIMARY KEY (especies_gremios_troficos_id),
  KEY (especie_id),
  KEY (gremio_trofico_id)
);