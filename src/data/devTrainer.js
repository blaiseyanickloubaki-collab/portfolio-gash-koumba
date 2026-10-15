export const developer = {
  pole: 'Freelance',
  title: 'Développeur Full Stack & IA',
  icon: 'Code',
  intro:
    'Je conçois des applications sur mesure pour digitaliser les processus de mes clients, de la maquette à la mise en production.',
  blocks: [
    {
      icon: 'Globe',
      title: 'Applications web',
      text: 'Sites et plateformes de gestion, back-office, tableaux de bord.',
      tags: ['HTML / CSS / JS', 'PHP', 'SQL'],
    },
    {
      icon: 'Smartphone',
      title: 'Applications mobiles',
      text: 'Applications Android / iOS multiplateformes.',
      tags: ['Flutter', 'Dart'],
    },
    {
      icon: 'Monitor',
      title: 'Applications desktop',
      text: 'Outils métier et logiciels de gestion pour postes de travail.',
      tags: ['Python', 'Java'],
    },
    {
      icon: 'Eye',
      title: 'Intelligence Artificielle & vision par ordinateur',
      text: "Intégration de l'IA dans les applications ; conception de petits modèles de détection d'objets et de vision par ordinateur.",
      tags: ['Python', 'OpenCV', "Détection d'objets", 'Machine Learning'],
      accent: true,
    },
  ],
};

export const trainer = {
  pole: 'Instituts & entreprises',
  title: 'Consultant Formateur',
  icon: 'Presentation',
  intro:
    "J'anime des formations pratiques pour les étudiants des instituts universitaires et pour les professionnels en entreprise.",
  trainings: [
    { year: '2023 – auj.', title: "Algorithmique, Python & initiation à l'IA", place: 'Institut G.E.M.T · Licence niveau II · Pointe-Noire' },
    { year: '2021 – 2022', title: 'Algorithmique et programmation', place: 'Institut G.E.M.T · Licence niveau II · Pointe-Noire' },
    { year: 'Juin–Sept. 2020', title: 'Logistique & gestion de stocks', place: 'Institut Universitaire IMB · Licence 1 · Pointe-Noire' },
    { year: 'Mars–Avr. 2020', title: 'Excel avancé : reporting & tableaux de bord', place: 'T-ESOFT · agents de la CORAF · Pointe-Noire' },
  ],
  stats: [
    { value: '4', label: 'missions de formation' },
    { value: '2', label: 'instituts universitaires' },
    { value: '1', label: 'entreprise industrielle' },
  ],
  domains: {
    title: "Domaines que j'enseigne",
    text: 'Modules adaptables au niveau du public, du débutant au professionnel.',
    tags: [
      { label: 'Algorithmique' },
      { label: 'Python' },
      { label: "Initiation à l'IA", accent: true },
      { label: 'Excel avancé' },
      { label: 'Tableaux de bord' },
      { label: 'Logistique' },
      { label: 'Gestion de stocks' },
      { label: 'Bureautique' },
    ],
  },
  approach: {
    title: 'Ma démarche',
    text: "Cas pratiques tirés du terrain, exercices progressifs et évaluation des acquis à chaque fin de module.",
  },
};