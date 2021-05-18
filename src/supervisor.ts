import { logger } from "./logger"
import { products } from "./config"
import { findAdapter } from "./adapters";
import { notify } from "./email";

export const start = async (options: Record<string, unknown> = {}) => {
  logger.info("Dingbat starting up. Notifying for the following products: ")
  logger.info(JSON.stringify(products))

  setInterval(() => {
    Object.keys(products).forEach(async (product) => {
      const adapters = Object.keys(products[product])
      adapters.forEach(async (adapter) => {
        const handler = findAdapter(product, adapter)
        if (handler) {
          logger.info(`Checking ${adapter} for ${product}...`)
          handler.check().then((result: boolean) => {
            if (result) {
              logger.info("SUCCESS!")
              logger.info(`${adapter} returned something other than the default status - sending email notification for ${product}`)
              notify(handler)
            }
          })
        } else {
          logger.error(`Something went wrong, handler not found for ${product} and ${adapter}.`)
        }
      })
    })
  }, 5000)
}
