export * from './applicationController.service';
import { ApplicationControllerService } from './applicationController.service';
export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './roleController.service';
import { RoleControllerService } from './roleController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [ApplicationControllerService, AuthControllerService, RoleControllerService, UserControllerService];
