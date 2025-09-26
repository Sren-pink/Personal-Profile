// Filter keys
export const AREAS = {
  UIUX: "UI/UX",
  WEBDEV: "Web Dev",
  MOBILE: "Mobile",
  GRAPHICS: "Graphics",
};

export const AREA_LABELS = {
  [AREAS.UIUX]: "UI/UX",
  [AREAS.WEBDEV]: "Web Dev",
  [AREAS.MOBILE]: "Mobile Dev",
  [AREAS.GRAPHICS]: "Graphics",
};

/* ==== IMPORT YOUR COVERS HERE ==== */
import pickpccover from "../assets/projectimages/pickyourpc/pickyourpc_cover.jpg";
import wellnesswebcover from "../assets/projectimages/wellness_web_2023/wellnessweb_cover.png";
import petcarecover from "../assets/projectimages/petcare/petcare_cover.jpg";
import fictionobjectcover from "../assets/projectimages/fictionalobject/fictionalobject_cover.jpg";
import routsycover from "../assets/projectimages/routsy/routsy_cover.png";
import dreamscover from "../assets/projectimages/dreams/dreams_cover.png";
import roadsafetycover from "../assets/projectimages/roadsafety/roadsafety_cover.jpg";

/* ==== PROJECTS ==== */
export const projects = [
  {
    id: "pick-your-pc",
    title: "Pick Your PC",
    top_des: "A framed computer picking user flow map to make things more simple and clear.",
    role: "Designer",
    year: 2023,
    areas: [AREAS.UIUX, AREAS.GRAPHICS],
    platform: "Desktop",
    category: "Academic",
    cover: pickpccover,
    projectdes:
      "Pick-Your-PC is an educational website made for people to pick the perfect PC while also learning what each part does and weighing each decision.",
    thingsincorporated: [
      "Basics: budget and use case",
      "Parts list: CPU, GPU, RAM, storage, motherboard, PSU, case, cooler",
      "Compatibility checks",
      "Performance expectations",
      "Running price total",
      "Power and heat considerations",
      "Upgrade path",
      "Warnings (bottlenecks, low power, heat)",
    ],
    slideEmbed1: "https://embed.figma.com/proto/8XO4ACVsAOWXAHGhiUCgt7/Pick-your-website-Wireframe?node-id=15-59&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=15%3A59&embed-host=share",
    slideEmbed1_title: "Pick Your PC Figma Prototype",
    tools: ["Figma", "Miro", "Google Forms", "Canva"],
  },

  {
    id: "recovered",
    title: "Recovered",
    top_des: "A private website where users can track their meals and see a weekly summary of how those meals affect them.",
    role: "Designer, Researcher",
    year: 2023,
    areas: [AREAS.WEBDEV, AREAS.UIUX],
    platform: "Desktop",
    category: "Academic",
    cover: wellnesswebcover,
    projectdes:
      "We created a space for meal journaling so people can notice patterns—calories, nutrients, and how they feel—then reflect with a weekly summary.",
    thingsincorporated: [
      "Basics: private meal journal",
      "Weekly summary of meals",
      "Goal setting and tracking",
      "Nutrition/calorie awareness",
      "Photo + caption per meal",
    ],
    slideEmbed1: "https://embed.figma.com/proto/KEf7Xxix71Pac2irkgjHTG/Interactive-Design-Final?node-id=1-190&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A190&show-proto-sidebar=1&embed-host=share",
    slideEmbed1_title: "Recovered Figma Prototype",
    tools: ["Figma", "Google Forms", "Canva"],
  },

  {
    id: "pet-care",
    title: "Pet Care",
    top_des: "A child-focused educational site about responsible pet ownership using UX principles.",
    role: "Designer + Software Engineer",
    year: 2024,
    areas: [AREAS.WEBDEV, AREAS.UIUX],
    platform: "Desktop",
    category: "Academic",
    cover: petcarecover,
    projectdes:
      "Pet-Care teaches children what pets need and helps them prepare before raising a pet.",
    thingsincorporated: [
      "Basic info of the animal",
      "Breed",
      "Food it needs",
      "Exercise needs (how much)",
      "Possible emergencies",
      "Warnings if not prepared",
    ],

    live: "https://sren-pink.github.io/pet-care.github.io/",

    slideEmbed1: "", // e.g. "https://www.figma.com/embed?embed_host=share&url=..."
    slideEmbed1_title: "Pet Care Figma Prototype",

    tools: ["Figma", "Canva"],
  },

  {
    id: "fictional-object",
    title: "Fictional Object",
    top_des: "Recipe strip wraps bowls/plates; icon-based steps.",
    role: "Graphic Designer",
    year: 2024,
    areas: [AREAS.GRAPHICS],
    platform: "Print",
    category: "Academic",
    cover: fictionobjectcover,
    projectdes:
      "A reusable recipe strip system with icon-driven steps that wraps around bowls/plates to guide cooking at a glance.",
    thingsincorporated: [
      "Icon system",
      "Step-by-step visuals",
      "Reusable format",
    ],
    slideEmbed1: "",
    slideEmbed1_title: "Fictional Objects Slide",
    tools: ["Figma", "Canva"],
  },

  {
    id: "road-safety",
    title: "Road Safety",
    top_des: "Urban UX + visibility; signage & accident analysis.",
    role: "Designer",
    year: 2024,
    areas: [AREAS.UIUX],
    platform: "Research",
    category: "Academic",
    cover: roadsafetycover,
    projectdes:
      "A study of biker/driver safety focusing on visibility, signage, and incident patterns to inform UX recommendations for streets.",
    thingsincorporated: [
      "Accident pattern review",
      "Visibility + signage audit",
      "UX recommendations",
    ],
    slideEmbed1: "",
    slideEmbed1_title: "Road Safety Slide",
    tools: ["Figma"],
  },

  {
    id: "routsy",
    title: "Routsy",
    top_des: "A diffuser control app with a Pinterest-inspired layout.",
    role: "Designer",
    year: 2025,
    areas: [AREAS.MOBILE, AREAS.UIUX],
    platform: "iOS",
    category: "Academic",
    cover: routsycover,
    projectdes:
      "Routsy borrows Pinterest-style UI patterns and integrates feedback from diffuser owners to make routines fast and friendly.",
    thingsincorporated: [
      "Pinterest-style UI + wireframes",
      "Home feed of shared diffuser layouts",
      "Diffuser settings (on/off, timers, routines)",
    ],
    slideEmbed1: "https://embed.figma.com/proto/zNbGIKDulYoSJhsGl9CMfA/W---Sirong-Ren?node-id=6216-10288&p=f&scaling=min-zoom&content-scaling=fixed&page-id=1%3A7&starting-point-node-id=6216%3A10288&show-proto-sidebar=1&embed-host=share",
    slideEmbed1_title: "Routsy Figma Prototype",
    tools: ["Figma", "Canva"],
  },

  {
    id: "dreams",
    title: "Dreams",
    top_des: "A self-reflection journal for dream logging that builds emotional clarity with gentle prompts.",
    role: "Designer + Software Engineer",
    year: 2025,
    areas: [AREAS.WEBDEV, AREAS.UIUX],
    platform: "iOS",
    category: "Academic",
    cover: dreamscover,
    projectdes:
      "Dreams extends the Apple Health feel—users log dreams and reflect with visuals and light prompts.",
    thingsincorporated: [
      "Apple Health–inspired UI + wireframes",
      "Dream journaling with prompts",
      "Graphs/visuals of dream notes",
    ],
    slideEmbed1: "https://embed.figma.com/proto/irf0rqabQt9Oh5GCPMTyO7/Untitled?node-id=31-592&p=f&scaling=min-zoom&content-scaling=fixed&page-id=30%3A562&starting-point-node-id=31%3A592&embed-host=share",
    slideEmbed1_title: "Dreams Figma Prototype",
    tools: ["Figma", "Canva"],
  },
];
