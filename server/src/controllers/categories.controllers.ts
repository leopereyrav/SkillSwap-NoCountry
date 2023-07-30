import { Request, Response } from 'express';
import { categoriesService } from '../services/categories.services';
import { ICategory } from '../interfaces/categories.interface';

class CategoryController {
  public async getCategories(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getCategories();
      return res.status(200).json({
        message: 'OK',
        data: categories,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async getCategoryById(req: Request, res: Response) {
    try {
      const categoryId: string = req.params.categoryId;
      const category = await categoriesService.getCategoryById(categoryId);

      if (!category) {
        return res.status(404).json({
          message: 'Category not found',
        });
      }

      return res.status(200).json({
        message: 'Successful category found',
        data: category,
      });
    } catch (err: any) {
      res.status(500).json({
        message: 'Server error',
        error: err,
      });
    }
  }

  public async createCategory(req: Request, res: Response) {
    try {
      const categoryData: ICategory = req.body;

      const newCategory = await categoriesService.createCategory(categoryData);
      return res.status(201).json({
        message: 'Category successfully added',
        data: newCategory,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async updateCategory(req: Request, res: Response) {
    try {
      const categoryId = req.params.categoryId;
      const categoryData: ICategory = req.body;

      const categoryUpdated = await categoriesService.updateCategory(categoryId, categoryData);

      return res.status(200).json({
        message: 'Category successfully updated',
        data: categoryUpdated,
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }

  public async deleteCategory(req: Request, res: Response) {
    try {
      const categoryId: string = req.params.categoryId;
      await categoriesService.deleteCategory(categoryId);
      return res.status(200).json({
        message: 'Category successfully deleted',
      });
    } catch (err: any) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
}

export const categoriesController = new CategoryController();
