interface Recipe {
    title: string;
    by: string;
    cookingTime: number;
    prepTime: number;
    description: {
      json: {
        data: {};
        content: Content[];
        nodeType: string;
      };
    };
    date: string;
    featured: boolean;
    tags: string[];
    ingredients: Ingredient[];
    instructions: string[];
    ratings: {
      one_star: number;
      two_star: number;
      five_star: number;
      four_star: number;
      three_star: number;
      total_reviews: number;
    };
    imagesCollection: {
      items: ImageItem[];
    };
    slug: string;
  }
  
  interface Content {
    data: {};
    content: ContentNode[];
    nodeType: string;
  }
  
  interface ContentNode {
    data: {};
    marks: any[];
    value: string;
    nodeType: string;
  }
  
  interface Ingredient {
    name: string;
    note?: string;
    quantity: string;
  }
  
  interface ImageItem {
    title: string;
    size: number;
    url: string;
    width: number;
    height: number;
  }
  
  interface RecipeCollection {
    total: number;
    items: Recipe[];
  }
  
  interface RecipeData {
    data: {
      recipe2Collection: RecipeCollection;
    };
  }
  
  type Props = {
    data: RecipeData;
  };