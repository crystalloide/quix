export interface IPathItemDef {
  id: string;
  name: string;
}

export interface IItemDef {
  id: string;
  name: string;
  type: string;
  path: IPathItemDef[];
  dateCreated?: number;
  dateUpdated?: number;
}
