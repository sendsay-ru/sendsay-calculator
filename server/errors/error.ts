import { RestApiError } from '../ts/types'

export class BadRequestError extends Error implements RestApiError {
  statusCode: number

  constructor(message = `Bad request`, statusCode = 400) {
    super(message)
    this.statusCode = statusCode
  }
}

export class PageNotFoundError extends Error implements RestApiError {
  statusCode: number

  constructor(message = 'Page Not Found') {
    super(message)
    this.statusCode = 404
  }
}

export class ServerError extends Error implements RestApiError {
  statusCode: number

  constructor(message = 'Server Error') {
    super(message)
    this.statusCode = 500
  }
}
