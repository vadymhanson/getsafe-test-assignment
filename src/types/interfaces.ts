export interface ProductId {
  developer: string;
  designer: string;
}

export interface RouteParams {
  type: keyof ProductId;
}