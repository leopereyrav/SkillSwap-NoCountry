import Category from '../models/categories.models';
import { ICategory } from '../interfaces/categories.interface';

class CategoriesService {
  public async getCategories() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (err: any) {
      console.log('Error in the Category Service', err);
    }
  }

  public async getCategoryById(categoryId: string) {
    try {
      const category = await Category.findById(categoryId);
      if (!category) {
        console.log('Category not found');
        throw new Error('Category not found');
      }
      return category;
    } catch (err: any) {
      console.log('Error in the Category Service', err);
    }
  }

  public async createCategory(categoryData: ICategory) {
    try {
      const newCategory = await Category.create(categoryData);
      return newCategory;
    } catch (err: any) {
      console.log('Error in the Category Service', err);
    }
  }

  public async updateCategory(categoryId: string, categoryData: ICategory) {
    try {
      const categoryUpdated = await Category.findByIdAndUpdate({ _id: categoryId }, categoryData, {
        new: true,
      });
      if (!categoryUpdated) {
        console.log('Category not found');
        throw new Error('Category not found');
      }

      return categoryUpdated;
    } catch (err: any) {
      console.log('Error in the Category Service', err);
    }
  }

  public async deleteCategory(categoryId: string) {
    try {
      const categoryDeleted = await Category.findByIdAndDelete(categoryId);
      if (!categoryDeleted) {
        console.log('Category not found');
        throw new Error('Category not found');
      }
      return;
    } catch (err: any) {
      console.log('Error in the Category Service', err);
    }
  }
}

export const categoriesService = new CategoriesService();
