import log4js from "log4js";

const getLogger = (moduleName: string) => {
  const logger = log4js.getLogger(moduleName);
  logger.level = "debug";
  return logger;
};

export default getLogger;
