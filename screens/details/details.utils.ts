interface Categories {
  [index: string]: string;
}

export const CATEGORY = (category: string) => {
  const objCategories: Categories = {
    "men's clothing": 'Roupa para homens',
    "women's clothing": 'Roupa para mulheres',
    jewelery: 'Jóias',
    electronics: 'Electrônicos',
  };

  return objCategories[category];
};
