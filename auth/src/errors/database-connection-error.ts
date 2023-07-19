import { IError } from "../types/error";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason = "Error connecting to database";
  statusCode = 500;
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors(): IError[] {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
