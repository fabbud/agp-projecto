-- DROP TABLE IF EXISTS `homepage`;

CREATE TABLE `homepage` (
  `journal_id`	INT NOT NULL,
  `article_1_id`	INT NOT NULL,
  `article_2_id`	INT NOT NULL,
  `article_3_id`	INT NOT NULL
);

-- INSERT INTO `homepage` (journal_id, article_1_id, article_2_id, article_3_id)
-- VALUES (1, 1, 2, 3);

-- DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title` VARCHAR(60) NOT NULL,
  `en_title` VARCHAR(60) NOT NULL,
  `thumbnail` VARCHAR(100) NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  `pt_intro_text` VARCHAR(100) NOT NULL,
  `en_intro_text` VARCHAR(100) NOT NULL,
  `pt_date` VARCHAR(8) NOT NULL,
  `en_date` VARCHAR(8) NOT NULL,
  `pt_content` LONGTEXT,
  `en_content` LONGTEXT,
  PRIMARY KEY (`id`)
);

-- INSERT INTO `news` (pt_title, en_title, thumbnail, image, pt_intro_text, en_intro_text, pt_date, en_date, pt_content, en_content ) VALUES 
-- ('Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your Guias friends', 'https://i.imgur.com/6ABe3A6.jpg', 'https://i.imgur.com/jTldhF9.jpg', 'Dicas para te materes ligada às tuas amigas Guias', 'Tips to stay connected to your friends Guides', 'ABR 2020', 'APR 2020', 'Querida Guia, Agora que já sabemos que as atividades presenciais estão suspensas, temos de por a tristeza ao largo e como é típico das Guias encontrar formas de estarmos juntas e contagiar com a nossa alegria todos os que nos rodeiam.Deixamos-te algumas dicas - algumas das quais sabemos que já estás a por em prática - para te manteres ligada à tua Patrulha e às tuas amigas Guias neste tempo de distanciamento social.', 'Dear Guide, Now that we know that face-to-face activities are suspended, we have to put sadness out and as is typical of Guides, find ways to be together and spread our joy to everyone around us. We leave you with some tips - some of which we know you’re already doing - to stay connected to your Patrol and your friendly Guides in this time of social detachment.' );

-- DROP TABLE IF EXISTS `journal`;

CREATE TABLE `journal` (
  `id`	INTEGER NOT NULL AUTO_INCREMENT,
  `pt_title`	VARCHAR(60) NOT NULL,
  `en_title`	VARCHAR(60) NOT NULL,
  `thumbnail`	VARCHAR(100) NOT NULL,
  `pdf_link`	VARCHAR(100) NOT NULL,
  `pt_year_edition`	VARCHAR(20) NOT NULL,
  `en_year_edition`	VARCHAR(20) NOT NULL,
  `pt_intro_text`	VARCHAR(250) NOT NULL,
  `en_intro_text`	VARCHAR(250) NOT NULL,
  `publish` BOOL,
  PRIMARY KEY (`id`)
);

-- INSERT INTO `journal` (pt_title, en_title, thumbnail, pdf_link, pt_year_edition, en_year_edition, pt_intro_text, en_intro_text, publish)
-- VALUES ('Eu e o outro: despertar para uma relação positiva', 'Me and the other: waking up to a positive relationship', 'https://imgur.com/VFLfKHd' , 'pdf', '2019 — 26ª Edição', '2019 — 26th Edition', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuries; - How Guidismo sows the seed of entrepreneurship', TRUE),
-- ('Educar para o empreendedorismo', 'Educating for entrepreneurship', 'https://imgur.com/VFLfKHd' , 'pdf', '2019 — 27ª Edição', '2019 — 27th Edition', '- Compreender o empreendedorismo; - À conversa com Patrícia Jardim da Palma; - A Guia portuguesa que se correspondia com Olave; - Empreendedores ao longo dos séculosComo o Guidismo lança a semente do empreendedorismo', '- Understanding entrepreneurship; - Chatting with Patrícia Jardim da Palma; - The Portuguese Guide that corresponded with Olave; - Entrepreneurs over the centuriesHow Guidismo sows the seed of entrepreneurship', TRUE);