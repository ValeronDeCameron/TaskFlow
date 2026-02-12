import type { Request, Response } from "express";
import { formatDate } from "../utils/formatDate.js";

export function logger(req: Request, res: Response, next: () => void): void {
    console.log(`${formatDate(new Date(), ['day', "month", "year"])} --- ${req.method} ${req.originalUrl}`)
    next()
}