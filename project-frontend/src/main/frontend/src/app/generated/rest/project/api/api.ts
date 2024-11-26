export * from './productController.service';
import { ProductControllerService } from './productController.service';
export * from './projectController.service';
import { ProjectControllerService } from './projectController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [ProductControllerService, ProjectControllerService, UserControllerService];
