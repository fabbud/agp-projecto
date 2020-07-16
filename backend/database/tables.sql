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
('Notirwerwerwee fardas', 'Tips to stay connected to your Guias friends', 'https://i.imgur.com/6ABe3A6.jpg', 'https://i.imgur.com/jTldhF9.jpg', 'Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your friends Guides', 'ABR 2020', 'APR 2020', 'Querida Guia, Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como é típico das Guias encontrar foàs tuas amigas Gcial.', 'Dear Guids in this time of social detachment.', TRUE, '2019-05-10'),
('Dicas rwerwerweligada às tuas amigas Guias', 'Tips to stay connected to your Guias friends', 'https://i.imgur.com/6ABe3A6.jpg', 'https://i.imgur.com/jTldhF9.jpg', 'Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your friends Guides', 'ABR 2020', 'APR 2020', 'Querida Guia, Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como é típico das neste tempo ento social.', 'Dear Guide, etachment.', TRUE, '2020-03-10'),
('PandemierwerwerewrwerS', 'Tips to stay connected to your Guias friends', 'https://i.imgur.com/6ABe3A6.jpg', 'https://i.imgur.com/jTldhF9.jpg', 'Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your friends Guides', 'ABR 2020', 'APR 2020', 'Querida Guia, Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como é típico das Guias encontrar f distanciamento social.', 'Dear Guide, are suspendedthis time of social detachment.', TRUE, '2020-04-10'),
('Noticcas seeeeeareee ee das', 'Tips to stay connected to your Guias friends', 'https://i.imgur.com/6ABe3A6.jpg', 'https://i.imgur.com/jTldhF9.jpg', 'Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your friends Guides', 'ABR 2020', 'APR 2020', 'Querida Guia, Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como é típico das Guias enconte manteres ligadncial.', 'Dees in this chment.', TRUE, '2019-05-10');

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

-- INSERT INTO `journal` (pt_title, en_title, thumbnail, pdf_link, year, pt_intro_text, en_intro_text, publish)
-- VALUES ('Educar para o empreendedorismo', 'Me and the other: waking up to a positive relationship', 'https://imgur.com/VFLfKHd' , 'pdf', '2019', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuries; - How Guidismo sows the seed of entrepreneurship', TRUE),
-- ('Educar para o empreendedorismo', 'Educating for entrepreneurship', 'https://imgur.com/VFLfKHd' , 'pdf', '2019', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuriesHow Guidismo sows the seed of entrepreneurship', TRUE);

-- DROP TABLE IF EXISTS `login`;

CREATE TABLE `login`
(
  `email` VARCHAR
(60) NOT NULL,
  `password` VARCHAR
(200) NOT NULL,
  PRIMARY KEY
(`email`)
);

-- INSERT INTO `login` (email, password)
-- VALUES ('agp.formulario.contacto@gmail.com', '1234');