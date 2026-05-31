export type NewsItem = {
  slug: string;
  date: string;
  type: string;
  title: string;
  excerpt: string;
};

export const news: NewsItem[] = [
  {
    slug: "lecture-splash-de-mots",
    date: "2026-03-18",
    type: "Lecture",
    title: "Gilberte distingee au Festival Splash de Mots 2026",
    excerpt:
      "La lecture de Gilberte a reçu la distinction Meilleure Lecture lors de l'edition 2026 du festival.",
  } //,
  //{
   // slug: "ouverture-preproduction",
    //date: "2026-04-10",
    //type: "Production",
    //title: "Ouverture de la pre-production",
    //excerpt:
//      "PLS entre en phase de pre-production avec un premier calendrier de residences et de rencontres partenariales.",
 // },
 // {
  //  slug: "appel-partenaires",
   // date: "2026-05-15",
    //type: "Partenariats",
   // title: "Appel a coproduction et mecenat",
   // excerpt:
   //   "La compagnie ouvre des discussions avec les lieux, structures et partenaires souhaitant accompagner la creation.",
  //},
];
