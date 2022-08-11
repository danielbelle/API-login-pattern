const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(express.json());
app.use(cors());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "banco_login",
});

//Funções do bd para registar

app.post("/register", (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err,result) =>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            bcrypt.hash(password, saltRounds, (err,hash) =>{
                db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email,hash], (err, result) =>{
                    if(err){
                        res.send(err);
                    }
                    res.send({msg: "Cadastrado com sucesso!"});
                });
            })
            
        }else{
            res.send({msg: "Usuário já cadastrado."})
        }
    });
});

// Função bd para login

app.post("/login", (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email =?", [email], (err,result) =>{
        if(err){
            res.send(err);
        }
        if(result.length>0){
            bcrypt.compare(password, result[0].password, (erro, result) =>{
                if(result){
                    res.send({msg: "Usuário logado com sucesso!"});
                }else{
                    res.send({msg: "Senha incorreta"});
                }
            });
        }else{
            res.send({msg: "Conta não encontrada, faça seu cadastro!"});
            
        }
    });
});



app.listen(3001, () => {
    console.log("Rodando no link: http://localhost:3001");
})