import express from "express";
import assetController from "../controllers/assetController";

const router = express.Router();

router.get("/heathCheck", assetController.healthCheck);
router.get("/", assetController.getAsset);
router.get("/:assetName", assetController.getAssetDetails);

export default router;
