import type { Request, Response, NextFunction } from 'express'

import type { RestApiError } from "../ts/types"

export const errorLogger = (err: RestApiError, req: Request, res: Response, next: NextFunction) => {
  console.error(err)

  return next(err)
}

//eslint-disable-next-line
export const errorResponder = (err: RestApiError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode ?? 400

  return res.status(statusCode).send({ message: err.message })
}
