export interface Place {
  id: number;
  title: string;
  type: string;
  imgURI?: string;
  avgRating?: number;
  reviewsCount?: number;
  distance?: number;
  categories?: string[];
  location?: string;
};