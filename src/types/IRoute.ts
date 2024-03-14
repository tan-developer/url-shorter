import { LazyExoticComponent } from "react";

export interface IRoute {
  path : string,
  exact : Boolean,
  name : String,
  component : any
}