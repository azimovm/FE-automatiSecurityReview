import { DiffsModel } from '../app/model/diffs.model';

export class ReportDataMock {
  static getReportDataMock(): DiffsModel[] {
    return [
      {
        team: "EKA_team",
        mises: [
          {
            name: "ms-oce-b2b-cart",
            endpoints: [
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCustomer",
                "method": "Get",
                "path": "/customer",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getAddress",
                "method": "Get",
                "path": "/addresses",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCompanyProfileContact",
                "method": "Get",
                "path": "/companyProfileContact",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCustomerSiteAddress",
                "method": "Get",
                "path": "/customerSiteAddress",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "Authenticated, B2BPermissionCheck, B2BPermissionCheck, SecurityClassification, GetMapping, Authenticated, B2BPermissionCheck, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCustomerSiteContactDetails",
                "method": "Get",
                "path": "/customerSiteContactDetails/primary",
                "useCase": "Lead, CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getDdiPorfileDetail",
                "method": "Get",
                "path": "/ddiProfileDetail",
                "useCase": "Inventory"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCustomerCsaId",
                "method": "Get",
                "path": "/customerCsaId",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "serviceDetail",
                "method": "Get",
                "path": "/serviceDetail",
                "useCase": "Inventory"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "retrieveServiceDetail",
                "method": "Get",
                "path": "/serviceDetailMKTPL",
                "useCase": "Inventory"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getSimpleSimulationData",
                "method": "Get",
                "path": "/simpleSimulation",
                "useCase": "Inventory"
              },
              {
                "annotation": "Authenticated, GetMapping, Authenticated",
                "controllerName": "EcmsController.java",
                "dataClassification": "",
                "functionName": "getCustomerCma",
                "method": "Get",
                "path": "/retrieveCma/{csaId}",
                "useCase": ""
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getCustomerMainContact",
                "method": "Get",
                "path": "/customerMainContact",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getIndividualData",
                "method": "Get",
                "path": "/getIndividualData",
                "useCase": "CompanyInfo"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getServiceType",
                "method": "Get",
                "path": "/serviceTypeCount",
                "useCase": "Inventory"
              },
              {
                "annotation": "NoApigeeExposure, B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getServicesForPhoneNumber",
                "method": "Get",
                "path": "/servicesForPhoneNumber",
                "useCase": "Inventory"
              },
              {
                "annotation": "NoApigeeExposure, B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getServicesForAssignee",
                "method": "Get",
                "path": "/servicesForAssignee",
                "useCase": "Inventory"
              },
              {
                "annotation": "B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "serviceCiDetail",
                "method": "Get",
                "path": "/serviceCiDetail",
                "useCase": "Inventory"
              },
              {
                "annotation": "Authenticated, SecurityClassification, GetMapping, Authenticated",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "serviceIndividualRel",
                "method": "Get",
                "path": "/getServiceIndividualRel",
                "useCase": ""
              },
              {
                "annotation": "NoApigeeExposure, B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getPhoneNumerRootService",
                "method": "Get",
                "path": "/getPhoneNumerRootService",
                "useCase": "Inventory"
              },
              {
                "annotation": "Authenticated, SecurityClassification, GetMapping, Authenticated",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getHostedPBXDetails",
                "method": "Get",
                "path": "/getHostedPBXDetails",
                "useCase": ""
              },
              {
                "annotation": "NoApigeeExposure, B2BPermissionCheck, SecurityClassification, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "getWirelinePhoneNumbers",
                "method": "Get",
                "path": "/getWirelinePhoneNumbers",
                "useCase": "Inventory"
              },
              {
                "annotation": "NoApigeeExposure, B2BPermissionCheck, GetMapping, B2BPermissionCheck",
                "controllerName": "EcmsController.java",
                "dataClassification": "",
                "functionName": "getSecondAddress",
                "method": "Get",
                "path": "/second-address",
                "useCase": "Inventory"
              },
              {
                "annotation": "Authenticated, SecurityClassification, GetMapping, Authenticated",
                "controllerName": "EcmsController.java",
                "dataClassification": "C3",
                "functionName": "enopDetails",
                "method": "Get",
                "path": "/enop-detail-page",
                "status": "inserted",
                "useCase": ""
              }
            ],
            version: "10.75.0"
          }
        ]
      }
    ];
  }
}
