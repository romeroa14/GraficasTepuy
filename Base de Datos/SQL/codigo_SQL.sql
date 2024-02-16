CREATE TABLE universidades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    siglas VARCHAR(10)
);

CREATE TABLE carreras_largas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE pnfa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE carreras_cortas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE maestrias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE doctorados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE programa_avanzado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);

CREATE TABLE especializaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    universidad_id INT,
    nombre VARCHAR(255),
    FOREIGN KEY (universidad_id) REFERENCES Universidades(id)
);