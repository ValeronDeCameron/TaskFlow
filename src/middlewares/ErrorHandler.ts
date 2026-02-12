import type { Request, Response } from "express";

export function ErrorHandler(err: Error, req: Request, res: Response, next: () => void) {
    res.status(500).json({message: err.message})
}