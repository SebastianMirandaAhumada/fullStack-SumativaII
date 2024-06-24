export interface DataJuegosInteface {
  id: number;
  img: string;
  title: string;
  precio:number;
  description: string;
  quantity: number;
}
export interface DataUsuariosInteface {
  name: string | null;
  phone: string | null  ;
  email: string | null  ;
  pass: string | null ;
  passconfirm: string | null  ;
}
