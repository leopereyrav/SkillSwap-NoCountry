import { Router } from 'express';
import { categoriesController } from '../controllers/categories.controllers';
import { authenticate } from '../middlewares/auth/authenticate';
import { validator } from '../middlewares/validators/categories';

const router = Router();

router.get('/', authenticate, categoriesController.getCategories);
router.get(
  '/:categoryId',
  authenticate,
  validator.categoryByIdValidator,
  categoriesController.getCategoryById
);
router.post('/', authenticate, validator.createCategoryValidator, categoriesController.createCategory);
router.put(
  '/:categoryId',
  authenticate,
  validator.updateCategoryValidator,
  categoriesController.updateCategory
);
router.delete(
  '/:categoryId',
  authenticate,
  validator.deleteCategoryValidator,
  categoriesController.deleteCategory
);

export default router;
