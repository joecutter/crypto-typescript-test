import express from "express";
import assetRoutes from "./assetRoutes";

const router = express.Router();

const version = `${process.env.VERSION}`;

router.use(`/api/v1/asset`, assetRoutes);

export default router;
