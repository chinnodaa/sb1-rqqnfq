export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
  };
  price: number;
  rating: number;
  totalRatings: number;
  thumbnail: string;
  duration: string;
  totalLectures: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  categories: string[];
  updatedAt: string;
  enrolled?: boolean;
}

export interface Section {
  id: string;
  title: string;
  lectures: Lecture[];
}

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
  videoUrl?: string;
  content?: string;
  preview: boolean;
}