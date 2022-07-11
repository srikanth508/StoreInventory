import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigiInventoryService {

  constructor(private http : HttpClient) { }

  public baseURL = environment.API_URL

  public GetCategoryMaster() {

    return this.http.get<any[]>(this.baseURL + "/Master/GetCategoryMaster/");
  }


  public InsertCategoryMaster(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertCategoryMaster';
    return this.http.post(this.baseURL, data)
  }


  public InsertItemMaster(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertItemMaster';
    return this.http.post(this.baseURL, data)
  }


  
  public GetItemMaster() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetItemMaster");
  }




  public InsertVendorMaster(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertVendorMaster';
    return this.http.post(this.baseURL, data)
  }

  public GetVendorMaster() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetVendorMaster");
  }
  
  public InsertProjectCreationMaster(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertProjectCreationMaster';
    return this.http.post(this.baseURL, data)
  }

  public GetProjectCreationMaster() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetProjectCreationMaster");
  }

  public InsertAuthorizationMaster(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertAuthorizationMaster';
    return this.http.post(this.baseURL, data)
  }

  public GetAuthorizationMaster() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetAuthorizationMaster");
  }

  
  public UpdateCategoryMaster(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateCategoryMaster';
    return this.http.post(this.baseURL, data);
  }

  public UpdateItemMaster(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateItemMaster';
    return this.http.post(this.baseURL, data);
  }

  
  public UpdateVendorMaster(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateVendorMaster';
    return this.http.post(this.baseURL, data);
  }

  public UpdateProjectCreationMaster(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateProjectCreationMaster';
    return this.http.post(this.baseURL, data);
  }

  public UpdateAuthorizationMaster(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateAuthorizationMaster';
    return this.http.post(this.baseURL, data);
  }

  public DeleteAuthorizationMaster(id:any) {

    return this.http.get<any[]>(this.baseURL + '/Master/DeleteAuthorizationMaster?ID=' + id);
  }

  public DeleteProjectCreationMaster(id:any) {

    return this.http.get<any[]>(this.baseURL + '/Master/DeleteProjectCreationMaster?ID=' + id);
  }

  public DeleteVendorMaster(id:any) {

    return this.http.get<any[]>(this.baseURL + '/Master/DeleteVendorMaster?ID=' + id);
  }
  
  
  public DeleteItemMaster(id:any) {

    return this.http.get<any[]>(this.baseURL + '/Master/DeleteItemMaster?ID=' + id);
  }
  
  public DeleteCategoryMaster(id:any) {

    return this.http.get<any[]>(this.baseURL + '/Master/DeleteCategoryMaster?ID=' + id);
  }
  
  public InsertAuthorizationDetails(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertAuthorizationDetails';
    return this.http.post(this.baseURL, data)
  }
  

  public delete() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetAuthorizationDetails ");
  }

   
  public DeleteAuthorizationDetails(id:any) {
    return this.http.get<any[]>(this.baseURL + '/Master/DeleteAuthorizationDetails?ID=' + id);
  }

  public UpdateAuthorizationDetails(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateAuthorizationDetails';
    return this.http.post(this.baseURL, data);
  }


  public InsertVendorDetails(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertVendorDetails';
    return this.http.post(this.baseURL, data)
  }

  
  public GetAuthorizationDetails() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetAuthorizationDetails");
  }

  public GetVendorDetails() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetVendorDetails");
  }
  

  public UpdateVendorDetails(data: any) {
    this.baseURL = this.baseURL + '/Master/UpdateVendorDetails';
    return this.http.post(this.baseURL, data);
  }


    public InsertPurchaseOrder(data:any) {
    this.baseURL = this.baseURL + '/Master/InsertPurchaseOrder';
    return this.http.post(this.baseURL, data)
  }


    
  public GetPurchaseOrder() {
    return this.http.get<any[]>(this.baseURL + "/Master/GetPurchaseOrder");
  }



}
