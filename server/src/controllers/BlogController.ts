import { Request, Response, NextFunction } from 'express'

class BlogController {
  /**
   * CREATED
   */
  public createBlock(req: Request, res: Response, next: NextFunction): any {}
  /**
   * READ
   */
  public getBlock(req: Request, res: Response, next: NextFunction): any {}
  /**
   * UPDATE
   */
  public updateBlock(req: Request, res: Response, next: NextFunction): any {}
  /**
   * DELETE
   */
  public deleteBlock(req: Request, res: Response, next: NextFunction): any {}
}
