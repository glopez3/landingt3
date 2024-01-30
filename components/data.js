import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Habilidades",
  desc: "Algunas habilidades que tengo para la gestión de la gestión de la innovación",
  image: benefitOneImg,
  bullets: [
    {
      title: "Creatividad",
      desc: "Facilitador de reuniones creativas siguiendo diversas técnicas",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Propiedad intelectual",
      desc: "Protección de activos intangibles: patentes, derechos de autor, marcas, etc.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Gestión de proyectos",
      desc: "Diversas metodologías para la administración de proyectos",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
