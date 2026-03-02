export interface CastMember {
  name: string;
  role: string;
  color: string;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  tagline: string;
  synopsis: string;
  posterColor: string;
  accentColor: string;
  cast: CastMember[];
  timelinePlacement: string;
  trailerUrl: string;
  status: "released" | "upcoming";
}

export const movies: Movie[] = [
  {
    id: "kaithi",
    title: "Kaithi",
    year: "2019",
    tagline: "One Night. One Mission. No Weapons.",
    synopsis:
      "An ex-convict who just got released from prison tries to meet his daughter for the first time. On his way, he encounters a drug raid and gets caught up in a night of chaos. With no weapons and only his wits, Dilli must survive the night and protect what matters most.",
    posterColor: "from-emerald-900 to-emerald-950",
    accentColor: "hsl(150, 60%, 30%)",
    cast: [
      { name: "Karthi", role: "Dilli", color: "bg-emerald-800" },
      { name: "Narain", role: "Bejoy", color: "bg-emerald-700" },
      { name: "George Maryan", role: "Paraman", color: "bg-emerald-800" },
      { name: "Harish Uthaman", role: "Anbu", color: "bg-emerald-700" },
    ],
    timelinePlacement: "The events of Kaithi happen on the same night as a key operation in the LCU, setting the foundation for the connected universe.",
    trailerUrl: "https://www.youtube.com/embed/25Z2VYFdq14",
    status: "released",
  },
  {
    id: "vikram",
    title: "Vikram",
    year: "2022",
    tagline: "There are no bad guys. Only varying degrees of evil.",
    synopsis:
      "A special agent named Amar investigates a series of brutal killings linked to a masked vigilante. As layers unravel, the story reveals connections to a drug syndicate, a retired agent codenamed Vikram, and the larger criminal underworld of the LCU.",
    posterColor: "from-red-900 to-red-950",
    accentColor: "hsl(0, 80%, 35%)",
    cast: [
      { name: "Kamal Haasan", role: "Vikram / Karnan", color: "bg-red-800" },
      { name: "Vijay Sethupathi", role: "Santhanam", color: "bg-red-700" },
      { name: "Fahadh Faasil", role: "Amar", color: "bg-red-800" },
      { name: "Suriya", role: "Rolex (Cameo)", color: "bg-red-700" },
    ],
    timelinePlacement: "Vikram bridges the events of Kaithi with the larger drug empire, introducing key players like Rolex who controls operations from the shadows.",
    trailerUrl: "https://www.youtube.com/embed/OKBMCL-frPU",
    status: "released",
  },
  {
    id: "leo",
    title: "Leo",
    year: "2023",
    tagline: "The Past Never Stays Buried.",
    synopsis:
      "Parthiban, a mild-mannered café owner in Kashmir, is forced to confront his violent past when a gang of drug lords tracks him down. As his true identity as Leo Das — a ruthless enforcer — is revealed, he must protect his family while facing the consequences of the life he tried to leave behind.",
    posterColor: "from-amber-900 to-amber-950",
    accentColor: "hsl(35, 80%, 40%)",
    cast: [
      { name: "Vijay", role: "Leo Das / Parthiban", color: "bg-amber-800" },
      { name: "Trisha", role: "Sathyapriya", color: "bg-amber-700" },
      { name: "Sanjay Dutt", role: "Harold Das", color: "bg-amber-800" },
      { name: "Arjun", role: "Antony Das", color: "bg-amber-700" },
    ],
    timelinePlacement: "Leo expands the drug empire storyline, showing the reach of the syndicate beyond Tamil Nadu and connecting to the Rolex narrative thread.",
    trailerUrl: "https://www.youtube.com/embed/3MNMViYqAyA",
    status: "released",
  },
  {
    id: "rolex",
    title: "Rolex",
    year: "TBA",
    tagline: "The Kingpin Rises.",
    synopsis:
      "The most anticipated chapter of the LCU focuses on the enigmatic crime lord Rolex, teased in Vikram's post-credits scene. This film promises to bring together multiple storylines and characters from across the universe in an epic culmination.",
    posterColor: "from-violet-900 to-violet-950",
    accentColor: "hsl(270, 60%, 35%)",
    cast: [
      { name: "Suriya", role: "Rolex", color: "bg-violet-800" },
      { name: "TBA", role: "TBA", color: "bg-violet-700" },
      { name: "TBA", role: "TBA", color: "bg-violet-800" },
      { name: "TBA", role: "TBA", color: "bg-violet-700" },
    ],
    timelinePlacement: "Rolex is expected to be the grand convergence point of the LCU, bringing together characters and storylines from all previous films.",
    trailerUrl: "",
    status: "upcoming",
  },
];

export interface Character {
  name: string;
  movie: string;
  actor: string;
  bio: string;
  color: string;
  gradient: string;
}

export const characters: Character[] = [
  {
    name: "Dilli",
    movie: "Kaithi (2019)",
    actor: "Karthi",
    bio: "An ex-convict with an unbreakable will. Released from prison, he fights through a night of chaos to meet his daughter for the first time.",
    color: "bg-emerald-900",
    gradient: "from-emerald-900/80 to-background",
  },
  {
    name: "Vikram",
    movie: "Vikram (2022)",
    actor: "Kamal Haasan",
    bio: "A retired black-ops agent pulled back into action. Operating under the codename Vikram, his true identity as Karnan harbors deep secrets.",
    color: "bg-red-900",
    gradient: "from-red-900/80 to-background",
  },
  {
    name: "Leo Das",
    movie: "Leo (2023)",
    actor: "Vijay",
    bio: "A former enforcer hiding behind the identity of Parthiban, a peaceful café owner. When his past catches up, the beast within awakens.",
    color: "bg-amber-900",
    gradient: "from-amber-900/80 to-background",
  },
  {
    name: "Rolex",
    movie: "Vikram / Rolex",
    actor: "Suriya",
    bio: "The enigmatic kingpin controlling the drug empire from the shadows. His brief appearance in Vikram sent shockwaves through the LCU.",
    color: "bg-violet-900",
    gradient: "from-violet-900/80 to-background",
  },
];
