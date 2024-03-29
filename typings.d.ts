type Base = {
  title: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  uploadedAt: string;
};

interface Skill extends Base {
  title: string;
  service: { title: string; descripion: string };
}

interface Service {
  _key: string;
  title: string;
  _ref: string;
  service: string;
  description: string;
}

interface Section extends Base {
  title?: string;
  heading: string;
  subheading: string;
  subtext: string;
  description: string;
  image: string;
  calltoaction?: string;
  service?: Service;
}

interface LandingPage extends Base {
  title: string;
  type: string;
  sections: Section[];
}

interface Header {
  name: string;
}

// Props
interface ExperimentCardProps {
  image: string;
  company: string;
  job: string;
  description: string;
}

interface ServiceCardProps {
  service: string;
  description: string;
  index: string;
}

interface HeroProps extends Section {
  section: Section;
  heading: string;
  subheading: string;
  subtext: string;
}

type SearchProps = {
  query: string;
  setQuery: (q: string) => void;
  sortOrder: string;
  setSortOrder: (q: string) => void;
};

type ProductCardProps = {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
};

type Products = {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type ProjectCardProps = {
  id?: number;
  title: string;
  description: string;
  stack: string[];
  imgUrl: string;
};
