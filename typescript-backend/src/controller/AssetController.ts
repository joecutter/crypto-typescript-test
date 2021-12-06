import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { dbConnection } from "../db";
import { getConnection } from "typeorm";
import { Asset } from "../entity/Asset";

async function healthCheck(req: Request, res: Response, next: NextFunction) {
  return res
    .status(200)
    .send({ code: 200, success: true, message: "Health check is ✅" });
}

async function getAll(req: Request, res: Response, next: NextFunction) {
  dbConnection
    .then(async (connection) => {
      const asset: Asset[] = await connection.manager.find(Asset);
      return res.status(200).send({
        code: 200,
        success: true,
        message: "Record(s) have been found successfully.",
        asset,
      });
    })
    .catch((error) => {
      console.error("Error ", error);
      return res.status(400).send({
        code: 400,
        success: false,
        message: "Record(s) not found",
        error,
      });
    });
}

async function getAsset(req: Request, res: Response, next: NextFunction) {
  let result: AxiosResponse = await axios.get(`${process.env.ASSET_URL}`);

  if (!result) {
    console.error(result);
    return res.status(400).send({
      code: 400,
      success: false,
      message: "Record(s) not found",
      result,
    });
  }

  let assets: Asset[] = result.data.result;

  const savedData = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Asset)
    .values(assets)
    .execute();

  if (!savedData) {
    return res.status(400).send({
      code: 400,
      success: false,
      message: "Record(s) not saved",
    });
  }

  return res.status(200).send({
    code: 200,
    success: true,
    message: "Record(s) have been saved successfully.",
    assets,
  });
}

async function getAssetDetails(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const assetName = req.query.basemarket;

  console.log(assetName);

  let result = await axios.get(
    `${process.env.ASSET_URL_HISTORY}?basemarket=${assetName}`
  );

  if (!result) {
    console.error("Result ", result);
    return res.status(400).send({
      code: 400,
      success: false,
      message: "Record(s) not found",
      result,
    });
  }

  let assets = result.data;

  return res.status(200).send({
    code: 200,
    success: true,
    message: "Record(s) have been found successfully.",
    assets,
  });
}

export default { healthCheck, getAsset, getAssetDetails, getAll };
