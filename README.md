# API-login-pattern

<h4>Sistema de login responsivo utilizando React.js, Node.js e MySQL. O usuário pode criar uma conta com senha criptografada e também fazer login no sistema.</h4>

<h5>Separei em duas componentes:<h5>

## Client:
- Foco desta componente é no cliente, onde ele primeiramente cria seu cadastro com senha criptografada e depois pode fazer login. 
- Caso ele não tenha cadastro, senha incorreta ou email existente na base ele emite um alerta.
- Utilizei as Bibliotecas:

<blockquote>
    "axios": "^0.27.2",<br>
    "formik": "^2.2.9",<br>
    "react": "^18.2.0",<br>
    "react-dom": "^18.2.0",<br>
    "react-scripts": "5.0.1",<br>
    "web-vitals": "^2.1.4",<br>
    "yarn": "^1.22.19",<br>
    "yup": "^0.32.11"
 </blockquote>

## Server:
- Foco em adicionar e validar os dados no banco MySQL
- Utilizei as Bibliotecas:

<blockquote>
    "bcrypt": "^5.0.1",<br>
    "cors": "^2.8.5",<br>
    "express": "^4.18.1",<br>
    "mysql": "^2.18.1",<br>
    "nodemon": "^2.0.19"
 </blockquote>
 
 ## Para criar o banco MySQL:
<blockquote>
CREATE TABLE `usuarios` ( <br>
  `idusuarios` int NOT NULL AUTO_INCREMENT,<br>
  `email` varchar(45) NOT NULL,<br>
  `password` varchar(200) NOT NULL,<br>
  PRIMARY KEY (`idusuarios`),<br>
  UNIQUE KEY `idusuarios_UNIQUE` (`idusuarios`)<br>
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci<br>
</blockquote>
