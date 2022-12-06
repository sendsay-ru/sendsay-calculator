import type { Request, Response, NextFunction } from 'express'

import type { RestApiError } from "../ts/types"

export const errorLogger = (err: RestApiError, req: Request, res: Response, next: NextFunction) => {
  console.error(err)

  return next(err)
}

//eslint-disable-next-line
export const errorResponder = (err: RestApiError, req: Request, res: Response, next: NextFunction) => {
  return res.status(err.statusCode).send({ message: err.message })
}
