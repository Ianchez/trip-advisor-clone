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

export interface IReview {
  id: number;
  placeId: number;
  author: string;
  rating: number;
  reviewTitle: string;
  reviewContent: string;
  date: string;
  likes: number;
}