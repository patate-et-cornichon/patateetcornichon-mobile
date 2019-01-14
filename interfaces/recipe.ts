export interface SearchedRecipes {
  slug: string;
  created: number;
  title: string;
  sub_title: string;
  full_title: string;
  introduction: string;
  total_time: number;
  comments_count: number;
  categories_list: string[];
  tags_list: string[];
  main_picture_thumbs: {
    mini: string,
    medium: string,
  };
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  children?: Category[];
}

export interface Tag {
  slug: string;
  name: string;
}

export interface RecipeIngredient {
  ingredient: string;
  quantity?: number;
  unit?: string;
}

export interface RecipeComposition {
  name?: string;
  ingredients: RecipeIngredient[];
}

export interface Recipe {
  id: string;
  slug: string;
  created: number;
  updated: number;
  title: string;
  sub_title: string;
  full_title: string;
  main_picture_thumbs: {
    mini: string;
    small: string;
    medium: string;
    large: string;
    extra_large: string;
    '1x1': string;
    '4x3': string;
    '16x9': string;
  };
  secondary_picture_thumbs?: {
    large: string;
  };
  goal: string;
  preparation_time: number;
  cooking_time?: number;
  fridge_time?: number;
  leavening_time?: number;
  total_time: number;
  difficulty: number;
  introduction: string;
  steps: string[];
  composition: RecipeComposition[];
  categories: Category[];
  tags: Tag[];
  comments_count: number;
  meta_description: string;
}

export interface PaginatedRecipes {
  count: number;
  num_pages: number;
  page_size: number;
  current_page: number;
  previous_page: number;
  next: string;
  previous: string;
  results: Recipe[];
}

export interface RecipesQueryParameters {
  page_size: number;
  ordering: string;
  categories__slug: string;
}

export interface Selection {
  id: number;
  slug: string;
  published: boolean;
  created: number;
  updated: number;
  title: string;
  description: string;
  meta_description: string;
  picture_thumbs: {
    mini: string;
    large: string;
    extra_large: string;
  };
  recipes: Recipe[];
}

export interface PaginatedSelections {
  count: number;
  num_pages: number;
  page_size: number;
  current_page: number;
  previous_page: number;
  next: string;
  previous: string;
  results: Selection[];
}
