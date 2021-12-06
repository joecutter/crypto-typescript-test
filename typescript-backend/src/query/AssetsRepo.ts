import { createConnection } from "typeorm";
import { Asset } from "../entity/Asset";

const savedAsset = async (data: any) => {
  const connection = await createConnection();

  let assetRepository = connection.getRepository(data);

  await assetRepository.save(data);
  console.log("Asset has been saved");
};

export default { savedAsset };
