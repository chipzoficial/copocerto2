export type Category = {
  id: string;
  nome: string;
  icone: string;
  descricao: string;
};

export type Addon = {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  ativo: boolean;
};

export type ProductSize = {
  id: string;
  nome: string;
  volume: string;
  preco: number;
};

export type Product = {
  id: string;
  nome: string;
  descricao: string;
  descricaoLonga: string;
  categoria: string;
  precoBase: number;
  imagem: string;
  destaque: string;
  tags: string[];
  disponivel: boolean;
  maisPedido?: boolean;
  combo?: boolean;
  tamanhos: ProductSize[];
  complementosPermitidos: string[];
};

export type OrderStatus =
  | "Recebido"
  | "Em preparo"
  | "Saiu para entrega"
  | "Pronto para retirada"
  | "Finalizado"
  | "Cancelado";

export type DeliveryMode = "Entrega" | "Retirada";

export type CartItem = {
  id: string;
  produtoId: string;
  nome: string;
  imagem: string;
  tamanho: ProductSize;
  complementos: Addon[];
  observacoes: string;
  quantidade: number;
  precoUnitario: number;
};

export type Order = {
  id: string;
  cliente: string;
  telefone: string;
  itens: CartItem[];
  valor: number;
  formaEntrega: DeliveryMode;
  status: OrderStatus;
  horario: string;
  pagamento: string;
  endereco: string;
};
