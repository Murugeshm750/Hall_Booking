import { PrismaClient } from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();


// ROUTER FOR GET PASS KEY DETAILS
router.get('/passkey', async (req, res) => {
    try {
        const data = await prisma.passkey.findMany({});
        res.json({
            passkey: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

// ROUTER FOR GET OWNERS DETAILS
router.get('/owners', async (req, res) => {
    try {
        const data = await prisma.owner.findMany({});
        res.json({
            owners: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

// ROUTER FOR GET USERS DETAILS
router.get('/users', async (req, res) => {
    try {
        const data = await prisma.user.findMany({});
        res.json({
            users: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

// ROUTER FOR GET HALL DETAILS
router.get('/hall', async (req, res) => {
    try {
        const data = await prisma.hall.findMany({});
        res.json({
            halls: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});

// /ROUTER FOR OWNER CREATE
router.post('/createpasskey', async (req, res) => {
    try {
        const { isowner,isuser } = req.body;
        const result = await prisma.passkey.create({
            data: {
                isowner: isowner,
                isuser: isuser
            }
        });
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating a passkey" });
    }
});

// /ROUTER FOR OWNER CREATE
router.post('/createOwner', async (req, res) => {
    try {
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
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating a owner" });
    }
});

// /ROUTER FOR OWNER CREATE
router.post('/createUser', async (req, res) => {
    try {
        const { Username, email, contact, address, password,isuser } = req.body;
        const result = await prisma.user.create({
            data: {
                u_name: Username,
                u_email: email,
                u_contact: contact,
                u_address: address,
                isuser: isuser,
                password: password
            }
        });
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating a user" });
    }
});


// // ROUTER FOR HALL CREATE
// router.post('/createHall', async (req, res) => {
//     try {
//         const { hallName, location, price, image, sizefrom, sizeTo } = req.body;
//         const result = await prisma.hall.create({
//             data: {
//                 h_name: hallName,
//                 h_location: location,
//                 h_price: price,
//                 h_img: image,
//                 h_size_from: sizefrom,
//                 h_size_to: sizeTo
//             }
//         });
//         res.json({ result });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while creating a Hall" });
//     }
// });

// ROUTER FOR HALL CREATE
router.post('/createHall', async (req, res) => {
    try {
        const hallData = {
            h_location: "Coimbatore",
            h_price: 25000,
            h_img: "Users\Murugesh\Downloads\vada3.jpg",
            h_size_from: 50,
            h_size_to: 500,
            h_name: "Ganesh mahal" // Provide an actual value for h_name
          };
        // const { hallName, location, price, image, sizefrom, sizeTo } = req.body;
        const result = await prisma.hall.create({
            data: hallData
        });
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating a Hall" });
    }
});

export default router;
