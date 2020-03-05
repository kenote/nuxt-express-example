import { Request, Response, NextFunction } from 'express'

export async function nuxtHandler (req: Request, res: Response, next: NextFunction): Promise<void> {
  let isNuxtPage: boolean = !/^(\/\_nuxt|\/__webpack_hmr)|(\.ico|\.png)$/.test(req.path)
  if (isNuxtPage) {
    // ...
  }
  return next()
}