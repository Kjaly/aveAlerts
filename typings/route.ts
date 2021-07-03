interface IRouterState {
  location: TRouterLocation;
  action: TRouterAction;
}

export type TRouterBranch = IRouterState;
