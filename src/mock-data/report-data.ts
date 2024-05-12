import { DiffsModel } from '../app/model/diffs.model';

export class ReportDataMock {
  static getReportDataMock(): DiffsModel[] {
    return [
      {
        controllerName: 'CartController.java',
        functionName: 'getCart',
        method: 'GET',
        path: '/items',
        annotation: 'SecurityClassification',
        dataClassification: 'C3',
        useCase: 'Mobile/Subscription/Promotion',
        status: 'deleted'
      },
      {
        controllerName: 'UserController.java',
        functionName: 'getUser',
        method: 'POST',
        path: '/user',
        annotation: 'None',
        dataClassification: 'C2',
        useCase: 'Admin/User Management',
      },
      {
        controllerName: 'ProductController.java',
        functionName: 'getProduct',
        method: 'GET',
        path: '/products',
        annotation: 'SecurityClassification',
        dataClassification: 'C1',
        useCase: 'E-commerce/Shopping',
        status: 'inserted'
      },
      {
        controllerName: 'OrderController.java',
        functionName: 'createOrder',
        method: 'POST',
        path: '/orders',
        annotation: 'SecurityClassification',
        dataClassification: 'C3',
        useCase: 'E-commerce/Shopping',
      },
    ];
  }
}
