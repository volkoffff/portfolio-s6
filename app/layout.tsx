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
      { url: "images/rolix12.png" },
      { url: "images/rolix13.png" },
      { url: "images/rolix14.png" },
      { url: "images/rolix15.png" },
      { url: "images/rolix10.png" },
      { url: "images/rolix11.png" },
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
        text: "En collaboration avec Killian David durant mon alternance, j'ai développé une bibliothèque de composants documenté associé à un Figma.",
      },
      {
        text: "Après avoir établi une nouvelle stack front pour nos logiciels d'éco-conception au sein d'Altermaker, nous avons décidé de créer une bibliothèque de composants afin d'optimiser notre processus de développement. En effet, les différents logiciels conçus durant l'année partageaient une base commune, ce qui nous permet désormais de réutiliser efficacement les mêmes éléments graphiques et fonctionnels, tout en garantissant une homogénéité et une meilleure maintenabilité des projets."
      },
      {
        text: "Le template comprend de nombreux composants soigneusement développé pouvant s'adapter à de nombreuses situations, chacun d'entre eux est développé sur le modèle d'un figma en réspectant à l'identique le nom de variables et props. Cette uniformité facilite une transition fluide et optimale entre la phase de maquettage et de développement.",
      },
    ],
  },
  {
    title: "Hive game",
    description:
      "Hive game est un projet scolaire en C++ visant à reprouire le jeu de plateau hive",
    id: 9,
    img: [
      { url: "images/hive1.png" },
      { url: "images/hive4.png" },
      { url: "images/hive2.png" },
      { url: "images/hive3.png" },
    ],
    links: [
      { link: "https://github.com/volkoffff/paolinek-API", type: "git", status: "public" },
    ],
    teams: [
      { name: "Pierre Fromont", role: "Développeur" },
      { name: "Benoit de Miscault", role: "Développeur" }
    ],
    tags: [{ name: "C++" }, { name: "POO" }, { name: "GSAP" }, { name: "QT" }],
    sponsors: [{ name: "UTC" }],
    pargraphs: [
      {
        text: "Dans le cadre de l’UV LO21 à l'utc, nous avons développé une application permettant de jouer à Hive sur console et avec une interface, en C++.",
      },
      {
        text: "Nous avons conçu le jeu avec une architecture la plus stable et propre possible, en respectant les normes S.O.L.I.D classiques en C++, et en implémentant de nombreux design patterns pour obtenir un code standardisé.",
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
        text: "L'interface graphique est en react est à été préalablement designer sur Figma. Le site a une approche experimental avec un univers diférent sur chaque page et avec une manière de naviguer particulière. L'ensemble des annimations sont réalisées à l'aide de GSAP.",
      },
      {
        text: "L'API permettant la mise à jour des contenus du site est propulsé grace à symphony et API plateform.",
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
