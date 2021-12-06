import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import Query from "../query/AssetsRepo";

async function healthCheck(req: Request, res: Response, next: NextFunction) {
  return res
    .status(200)
    .send({ code: 200, success: true, message: "Health check is ✅" });
}

async function getAll(req: Request, res: Response, next: NextFunction) {
  return res
    .status(200)
    .send({ code: 200, success: true, message: "Health check is ✅" });
}

async function getAsset(req: Request, res: Response, next: NextFunction) {
  let result: AxiosResponse = await axios.get(`${process.env.ASSET_URL}`);

  if (!result) {
    console.error(result);
    return res.status(400).send({
      code: 400,
      success: false,
      message: "Record(s) not found",
      data: result,
    });
  }

  let assets = result.data;

  // for (let result of assets.result) {
  //   await Query.savedAsset(result);
  // }

  return res.status(200).send({
    code: 200,
    success: true,
    message: "Record(s) have been found successfully.",
    data: assets,
  });
}

async function getAssetDetails(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const assetName = req.params.assetName;

  console.log(assetName);

  let result = await axios.get(`${process.env.ASSET_URL_ID}${assetName}`);

  if (!result) {
    console.error("Result ", result);
    return res.status(400).send({
      code: 400,
      success: false,
      message: "Record(s) not found",
      data: result,
    });
  }

  let assets = result.data;

  return res.status(200).send({
    code: 200,
    success: true,
    message: "Record(s) have been found successfully.",
    data: assets,
  });
}

export default { healthCheck, getAsset, getAssetDetails, getAll };
