import express from "express";
import Tyre, { Brand } from "../models/tyres.js";
const router = express.Router();

router.get("/brands", async(req, res)=> {
  try {
    const brands = await Brand.find();
    res.send(brands);
  } catch(e) {
    res.status(404)
    console.error(e);
  }
})

router.get("/tyres", async (req, res) => {
  try {
    const tyres = await Tyre.find();
    res.send(tyres);
  } catch(e) {
    res.status(404)
    console.error(e)
  }
})

router.get("/tyres/:id", async (req, res) => {
  try {
    const tyre = await Tyre.findOne({ _id: req.params.id });
    res.send(tyre);
  } catch {
    res.status(404);
    res.send({ error: "Tyre does not exist" });
  }
});

router.get("/tyres/title/:title", async (req, res) => {
  const title = req.params.title
  try {
  const tyres = await Tyre.find({ title : {$regex: title, $options: "ix" }});
    res.send(tyres);
  } catch {
    res.status(404);
    res.send({ error: "Tyres either do not exist" });
  }
});

router.get("/:brandid", async (req, res) => {
  const brandid = req.params.brandid
  try {
    const tyres = await Tyre.find({brandid: {$regex: brandid, $options: "ix" }})
    res.send(tyres)
  } catch {
    res.status(404);
    res.send({error: "No tyres by this brand exist"})
  }
})

export default router;

