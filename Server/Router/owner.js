import { PrismaClient } from "@prisma/client";
import express from "express";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();

router.post("login", (req, res) => {
  const data = { userName: req.body.userName, password: req.body.password };

  const encrypted = jwt.decode(p)
});

router.post("register", (req, res) => {

  const { Ownername, email, contact, address, password,isowner } = req.body;
  const result = await prisma.owner.create({
      data: {
          o_name: Ownername,
          o_email: email,
          o_contact: contact,
          o_address: address,
          isowner: isowner,
          password: password
      }
  });

    const encryptedKey = jwt.sign(s, 'testkey')

    return res.send({
        
    })
});
