import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Contact } from "./@contact/contact";
import Footer from "./@footer/footer";
import Hero from "./@hero/hero";
import { Profile } from "./@profile/profile";
import Projects from "./@projects/projects";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robin Lanfranchi | Portfolio",
  description: "Robin Lanfranchi's portfolio",
};

export type Project = {
  title: string;
  description: string;
  id: number;
  img: { url: string }[];
  links: { link: string; type: string; status: string }[];
  teams: { name: string; role: string }[];
  tags: { name: string }[];
  sponsors: { name: string }[];
  pargraphs: { text: string }[];
};

const projects: Project[] = [
  {
    title: "Rolix",
    description:
      "Rolix est une bibliothèque de composants React et TypeScript développé afin de gagner du temps.",
    id: 1,
    img: [
      { url: "images/rolixCover.png" },
      { url: "images/rolix1.png" },
      { url: "images/rolix2.png" },
      { url: "images/rolix3.png" },
      { url: "images/rolix4.png" },
      { url: "images/rolix5.png" },
      { url: "images/rolix7.png" },
      { url: "images/rolix8.png" },
      { url: "images/rolix9.png" },
    ],
    links: [
      { link: "", type: "link", status: "private" },
      { link: "", type: "git", status: "private" },
    ],
    teams: [{ name: "Killian David", role: "Développeur" }],
    tags: [
      { name: "React" },
      { name: "TS" },
      { name: "tailwind" },
      { name: "Shadcn" },
      { name: "Zod" },
      { name: "React hook form" },
    ],
    sponsors: [{ name: "Altermaker" }],
    pargraphs: [
      {
        text: "En collaboration avec Killian David, j'ai conçu un modèle de départ pour nos logiciels destinés aux clients en entreprise. Étant donné que ces logiciels reposent souvent sur des bases similaires, nous avons développé ce modèle documenté et intégré à Figma. Cela nous permet de créer nos maquettes sur cette plateforme et de développer ensuite nos interfaces en utilisant les mêmes composants.",
      },
      {
        text: "Le template comprend de nombreux composants soigneusement nommés, chacun contenant exactement les mêmes noms de variantes que sur Figma. Cette uniformité facilite une transition fluide et optimale entre les deux plateformes.",
      },
    ],
  },
  {
    title: "Paoline.K",
    description:
      "Paoline.K est un Projet de galerie en ligne pour une artiste spécialisée en collage et peinture.",
    id: 2,
    img: [
      { url: "images/paoline3.png" },
      { url: "images/paoline1.png" },
      { url: "images/paoline2.png" },
    ],
    links: [
      { link: "https://github.com/volkoffff/paolinek-API", type: "git", status: "progress" },
      { link: "https://github.com/volkoffff/paolinek-interface", type: "git", status: "progress" },
    ],
    teams: [],
    tags: [{ name: "React" }, { name: "Symfony" }, { name: "GSAP" }],
    sponsors: [{ name: "Paoline.K" }],
    pargraphs: [
      {
        text: "Le front office en react est une galerie éxperimentale, chaque page à un univers diférent avec une manière de naviguer particulière, les animations sont réalisées avec GSAP.",
      },
      {
        text: "Création d'un back office permettant l'ajout de nouvelles œuvres et collections, ainsi qu'une API rest.",
      },
    ],
  },
  {
    title: "JCDecaux",
    description: "JCDecaux est une web-app d'écoconception de mobilier urbain.",
    id: 3,
    img: [
      { url: "images/jcdCover.png" },
      { url: "images/jcd1.png" },
      { url: "images/jcd2.png" },
      { url: "images/jcd3.png" },
      { url: "images/jcd4.png" },
      { url: "images/jcd5.png" },
      { url: "images/jcd6.png" },
    ],
    links: [
      { link: "", type: "link", status: "private" },
      { link: "", type: "git", status: "private" },
    ],
    teams: [{ name: "Nourhane Boudaoud", role: "Développeur" }],
    tags: [
      { name: "React" },
      { name: "TS" },
      { name: "tailwind" },
      { name: "Shadcn" },
      { name: "Zod" },
      { name: "React hook form" },
    ],
    sponsors: [{ name: "JCDecaux" }],
    pargraphs: [
      {
        text: "J'ai conçu en travail d'équipe l'interface complète du logiciel d'écoconception pour JCD, en commençant par la création du wireframe et de la maquette, jusqu'à la finalisation de cette dernière en React.",
      },
      {
        text: "j'ai accompli une tache particulièrement complexe qui consitait à créer l'affichage des chants de formulaire en fonction des retours API, en utilisant React hook form et Zod. La compléxité de cette tâche résidait dans la nécessité de générer le schéma zod ainsi que les cas particuiliers comme un input array.",
      },
    ],
  },
  {
    title: "Schneider Electric",
    description:
      "Schneider Electric est une web-app de modélisation énergétique et de simulation de materiels.",
    id: 4,
    img: [{ url: "images/seCover.png" }],
    links: [
      { link: "", type: "link", status: "private" },
      { link: "", type: "git", status: "private" },
    ],
    teams: [{ name: "Florian Bratec", role: "Développeur" }],
    tags: [{ name: "JS" }, { name: "SCSS" }, { name: "PHP" }],
    sponsors: [{ name: "Schneider Electric" }],
    pargraphs: [
      {
        text: "J'ai conçu l'interface complète d'un logiciel d'écoconception pour Schneider Electric, en commençant par la création du wireframe et de la maquette, jusqu'à la finalisation de cette dernière en Js natif.",
      },
      {
        text: "J'ai un travail particulièrement complexe dans le calucls des résultats et leurs affichages en temps réels.",
      },
      {
        text: "Projet confidentiel, les détails ne peuvent pas être partagés.",
      },
    ],
  },
  {
    title: "FCBA",
    description:
      "FCBA est une web-app de modélisation et d'ACV déstinée à l'ameublement francais'.",
    id: 5,
    img: [
      { url: "images/fcbaCover.png" },
      { url: "images/fcba1.png" },
      { url: "images/fcba2.png" },
      { url: "images/fcba3.png" },
      { url: "images/fcba4.png" },
      { url: "images/fcba5.png" },
      { url: "images/fcba6.png" },
    ],
    links: [
      { link: "", type: "link", status: "private" },
      { link: "", type: "git", status: "private" },
    ],
    teams: [{ name: "Killian David", role: "Développeur" }],
    tags: [
      { name: "React" },
      { name: "TS" },
      { name: "tailwind" },
      { name: "Shadcn" },
      { name: "Zod" },
      { name: "React hook form" },
    ],
    sponsors: [{ name: "FCBA" }],
    pargraphs: [
      {
        text: "J'ai Co concu l'interface du logiciel de fCBA d'écoconception de mobilier, une démarche qui deviendra bientôt obligatoire pour la conception de mobilier en France.",
      },
      {
        text: "J'ai effectué un travail particulièrement complexe dans la partie modélisation du logiciel dans les nomenclatures là ou j'ai du optimisé les manières de requetter l'api et l'envoie de nouvelles données et ajout pour optenir la solution la plus légère possible.",
      },
    ],
  },
  {
    title: "LyonTour",
    description:
      "Lyontour est un projet fictif de site de réservation de billets à Lyon.",
    id: 6,
    img: [
      { url: "images/lyontour1.png" },
      { url: "images/lyontour2.png" },
      { url: "images/lyontour3.png" },
      { url: "images/lyontour4.png" },
    ],
    links: [
      {
        link: "https://mmi21h07.sae301dev.ovh/",
        type: "link",
        status: "public",
      },
      {
        link: "https://github.com/lunaytik/sae301",
        type: "git",
        status: "public",
      },
    ],
    teams: [{ name: "Nathan Deuil", role: "Développeur" }],
    tags: [{ name: "Twig" }, { name: "JS" }, { name: "Symfony" }],
    sponsors: [{ name: "IUT de Troyes" }],
    pargraphs: [
      {
        text: "Dans ce projet je me suis occupé de la partie front-end, j'ai réalisé l'interface complète du site, en commençant par la création du wireframe et de la maquette, jusqu'à la finalisation de cette dernière en Twig.",
      },
    ],
  },
  {
    title: "Roy Lunetier",
    description:
      "Roy Lunetier est un POC dans la réalisation d'un projet innovant pour un opticien.",
    id: 7,
    img: [{ url: "images/roy1.png" }, { url: "images/roy2.png" }],
    links: [
      {
        link: "https://sae501-sigma.vercel.app/",
        type: "link",
        status: "public",
      },
      {
        link: "https://github.com/JulieVanHoudenhove/sae501",
        type: "git",
        status: "public",
      },
    ],
    teams: [
      { name: "Nathan Deuil", role: "Développeur" },
      { name: "Jules Bousrez", role: "chef de projet" },
      { name: "Julie Van Houdenhove", role: "chef de projet" },
    ],
    tags: [{ name: "React" }, { name: "JS" }],
    sponsors: [{ name: "IUT de Troyes" }],
    pargraphs: [
      {
        text: "Dans ce projet, j'ai pris en charge les tests des lunettes en réalité augmentée (AR). Cette tâche s'est avérée particulièrement complexe, nécessitant l'utilisation de Jeeliz pour intégrer nos propres modèles de lunettes.",
      },
    ],
  },
  {
    title: "Woocop",
    description:
      "Woocop est un launcher et un jeu reprenant le concept de Code Name",
    id: 8,
    img: [
      { url: "images/woocopCover.png" },
      { url: "images/woocop1.png" },
      { url: "images/woocop2.png" },
      { url: "images/woocop3.png" },
      { url: "images/woocop4.png" },
      { url: "images/woocop5.png" },
      { url: "images/woocop6.png" },
    ],
    links: [
      {
        link: "https://mmi21h07.sae401.ovh",
        type: "link",
        status: "public",
      },
      {
        link: "https://github.com/volkoffff/sae401",
        type: "git",
        status: "public",
      },
    ],
    teams: [{ name: "Nourhane Boudaoud", role: "Développeur" }],
    tags: [{ name: "Vue" }, { name: "Symfony" }],
    sponsors: [{ name: "IUT de Troyes" }],
    pargraphs: [
      {
        text: "Dans le cadre de ce projet, j'ai pris en charge la conception des interfaces du jeu et du lanceur (launcher) en utilisant Twig, ainsi que le développement de la partie backend pour les fonctionnalités liées aux utilisateurs, aux parties et au volet social.",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <Hero projects={projects} />
        <Profile />
        <Projects projects={projects} />
        <Contact />
        <Footer />
        {children}
      </body>
    </html>
  );
}
