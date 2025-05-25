export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  shortDescription: string;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  service: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}