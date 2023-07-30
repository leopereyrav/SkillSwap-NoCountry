import { Request, Response } from 'express';
import { searchService } from '../services/search.services';

class SearchController {
  public async search(req: Request, res: Response) {
    try {
      let {category, level,} = req.query
      category = category as string
      level = level as string
      const page = parseInt(req.query.page as string, 10) || 1;
      const limit = parseInt(req.query.limit as string, 10) || 5;
      const users = await searchService.search({
        category,
        level, page, limit,
      });
      console.log(req.query)
      return res.status(200).json({
        data: users,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
}

export const searchController = new SearchController();
