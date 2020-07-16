-- DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  email VARCHAR(90) UNIQUE,
  password VARCHAR(90),
  PRIMARY KEY(`id`)
);

INSERT INTO `users` (email, password)
VALUES ('backagp@teste.com', 'teste');


-- DROP TABLE IF EXISTS `homepage`;


CREATE TABLE `homepage` (
  `journal_edition`	INT NOT NULL,
  `article_1`	INT NOT NULL,
  `article_2`	INT NOT NULL,
  `article_3`	INT NOT NULL

);

-- INSERT INTO `homepage` (journal_edition, article_1, article_2, article_3)
-- VALUES (1, 1, 2, 3);

-- DROP TABLE IF EXISTS `news`;

CREATE TABLE `news`
(
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title` VARCHAR(80) NOT NULL,
  `en_title` VARCHAR(80) NOT NULL,
  `thumbnail` VARCHAR(1000) NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  `pt_intro_text` VARCHAR(100) NOT NULL,
  `en_intro_text` VARCHAR(100) NOT NULL,
  `pt_date` VARCHAR(8) NOT NULL,
  `en_date` VARCHAR(8) NOT NULL,
  `pt_content` LONGTEXT NOT NULL,
  `en_content` LONGTEXT NOT NULL,
  `publish`	BOOL NOT NULL,
  `date` DATE, 
  PRIMARY KEY(`id`)
);

INSERT INTO `news` (pt_title, en_title, thumbnail, image, pt_intro_text, en_intro_text, pt_date, en_date, pt_content, en_content, publish, date ) VALUES 
('O Trevo também fica em casa', 
'O Trevo também fica em casa', 
'https://drive.google.com/uc?export=view&id=11-56o6QWUOzIJqhiz3sKXFrK-Ics-ltG', 
'https://drive.google.com/uc?export=view&id=1ZWfRbvsJoISby8APyw4ldQX2oUP3Prvh',
'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.', 
'Enquanto não sai para as ruas, o jornal O Trevo sai em casa. Versão digital já disponível.',
'MAI 2018', 
'MAI 2018', 
'Querida Guia', 
'Dear Guids in this time of social detachment.', 
TRUE, date)

-- DROP TABLE IF EXISTS `journal`;

  CREATE TABLE `journal`
  (
    `edition`	INTEGER NOT NULL AUTO_INCREMENT,
    `pt_title`	VARCHAR(60) NOT NULL,
    `en_title`	VARCHAR(60) NOT NULL,
    `thumbnail`	VARCHAR(100) NOT NULL,
    `pdf_link`	VARCHAR(100) NOT NULL,
    `year`	VARCHAR(20) NOT NULL,
    `pt_intro_text_1`	VARCHAR(250),
    `pt_intro_text_2`	VARCHAR(250),
    `pt_intro_text_3`	VARCHAR(250),
    `pt_intro_text_4`	VARCHAR(250),
    `pt_intro_text_5`	VARCHAR(250),
    `en_intro_text_1`	VARCHAR(250),
    `en_intro_text_2`	VARCHAR(250),
    `en_intro_text_3`	VARCHAR(250),
    `en_intro_text_4`	VARCHAR(250),
    `en_intro_text_5`	VARCHAR(250),
    `publish`	BOOL NOT NULL,
    PRIMARY KEY (`edition`)
);

-- INSERT INTO `journal` (pt_title, en_title, thumbnail, pdf_link, year, pt_intro_text, en_intro_text, publish) VALUES
-- ('Jornal 20', 'Me and the other: waking up to a positive relationship', 'https://imgur.com/VFLfKHd' , 'pdf', '2020', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuries; - How Guidismo sows the seed of entrepreneurship', TRUE),
-- ('Jornal 19', 'Me and the other: waking up to a positive relationship', 'https://imgur.com/VFLfKHd' , 'pdf', '2019', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuries; - How Guidismo sows the seed of entrepreneurship', TRUE),
-- ('Jornal 18', 'Educating for entrepreneurship', 'https://imgur.com/VFLfKHd' , 'pdf', '2018', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuriesHow Guidismo sows the seed of entrepreneurship', FALSE);
