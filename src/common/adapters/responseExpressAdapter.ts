import { Response } from "express";
import { JoiValidationError } from "../utils/joi-error";

class ResponseExpress {
  // bufferExcelResponse(res: Response, data: ArrayBuffer, filename: string) {
  //   res.setHeader("Content-Type",
  // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  //   res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  //   return res.end(data, "binary");
  // }

  // downloadResponse(res: Response, path: string) {
  //   try {
  //     res.setHeader("Content-Type",
  // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  //     return res.download(path);
  //   } catch (error) {
  //     const _error = error as Error;
  //     return this.errorResponse(res, _error);
  //   }
  // }

  successResponse(res: Response, data: any) {
    return res.status(200).json({ ...data, ok: true });
  }

  errorResponse(res: Response, data: Error) {
    const errorMessage: any = {
      error: data.message,
      name: data.name,
      stack: data?.stack,
      ok: false,
    };

    if (data instanceof JoiValidationError) {
      return res.status(400).json({ ...errorMessage, details: data.getDetails() });
    }

    return res.status(400).json(errorMessage);
  }

  authErrorResponse(res: Response, data: Error) {
    return res.status(401).json({
      error: data.message,
      name: data.name,
      stack: data?.stack,
      ok: false,
    });
  }
}
export default ResponseExpress;
