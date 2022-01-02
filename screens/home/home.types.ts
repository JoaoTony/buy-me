import { GetServerSidePropsReturn } from '../../types/get-server-side-props-return';

interface IProducts {
  products: Array<any>
}
export interface IState {
  allProducts: IProducts;
  theme: Object
}

export interface HomeProps extends GetServerSidePropsReturn {
  handleTheme: () => void
}
