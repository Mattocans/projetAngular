export interface Image {
  url: string;
  formats?: {
    small?: string;
    thumbnail?: string;
  };
}

export interface Pokemon {
  id: number
  documentId: string
  nom: string
  text: string
  description: string
  prix: number
  stock: number
  image: Image[]
}
