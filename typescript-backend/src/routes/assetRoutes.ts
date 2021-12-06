import express from "express";
import assetController from "../controller/AssetController";

const router = express.Router();

router.get("/heathCheck", assetController.healthCheck);
router.get("/", assetController.getAsset);
router.get("/findAll", assetController.getAll);
router.get("/:assetName", assetController.getAssetDetails);

export default router;
