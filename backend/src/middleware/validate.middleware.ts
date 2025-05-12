import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error: any) {
      return res.status(400).json({
        message: "Validation error",
        error: error.errors,
      });
    }
  };
