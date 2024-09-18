import events_1 from "./events_1.jpg";
import events_2 from "./events_2.jpg";
import events_3 from "./events_3.jpg";
import project_1 from "./water_.jpg";
import project_2 from "./events_2.jpg";
import project_3 from "./sanitation_.jpg";
import blog_1 from "./slider_1.jpg";
import blog_2 from "./slider_2.jpg";
import blog_4 from "./farmer.jpg";
import teamMember1 from "./teammember_1.jpg";
import teamMember2 from "./teammember_3.jpg";
import teamMember3 from "./teammember_4.jpg";
import teamMember4 from "./teammember_2.jpg";

export const eventsData = [
  {
    id: 1,
    title: "Community Outreach Program",
    date: "September 25, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Nairobi, Kenya",
    description:
      "Join us for a day of community service and engagement to support local initiatives. We will be providing resources, food, and medical aid.",
    imageUrl: events_1,
    registrationLink: "#",
  },
  {
    id: 2,
    title: "Fundraising Gala Dinner",
    date: "October 15, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Serena Hotel, Nairobi",
    description:
      "An elegant evening to raise funds for our ongoing projects. Join us for an evening of dinner, entertainment, and giving back.",
    imageUrl: events_2,
    registrationLink: "#",
  },
  {
    id: 3,
    title: "Volunteer Training Workshop",
    date: "November 5, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Mombasa, Kenya",
    description:
      "A full-day training session for volunteers interested in joining our efforts in helping the community. Learn the skills necessary to make an impact.",
    imageUrl: events_3,
    registrationLink: "#",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Water for Life",
    location: "Turkana, Kenya",
    description:
      "An initiative to provide clean and accessible water for communities in the Turkana region. The project aims to build wells and install water purification systems.",
    status: "Ongoing",
    imageUrl: project_1,
  },
  {
    id: 2,
    title: "Education for All",
    location: "Kibera, Nairobi",
    description:
      "Our 'Education for All' project focuses on providing scholarships, school supplies, and infrastructural support to schools in low-income areas.",
    status: "Completed",
    imageUrl: project_2,
  },
  {
    id: 3,
    title: "Health & Sanitation",
    location: "Mombasa, Kenya",
    description:
      "A project dedicated to improving sanitation in rural communities by building public toilets, handwashing stations, and providing hygiene education.",
    status: "Ongoing",
    imageUrl: project_3,
  },
];

export const blogs = [
  {
    title: "How We Are Changing Lives in Rural Areas",
    description:
      "Learn how our organization is helping communities improve their quality of life through sustainable development projects.",
    image: blog_1,
    link: "#",
  },
  {
    title: "The Impact of Volunteerism in Africa",
    description:
      "Volunteers from all over the world share their experiences and the impact of their work in Africa.",
    image: blog_2,
    link: "#",
  },
  {
    title: "How to Support Local Farmers",
    description:
      "Explore ways you can help support local farmers and improve food security in disadvantaged communities.",
    image: blog_4,
    link: "#",
  },
];

export const faqs = [
  {
    question: "What is the mission of the NGO?",
    answer:
      "Our mission is to provide support and resources to underserved communities in Kenya, focusing on sustainable development and empowerment.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can get involved by volunteering with us, making a donation, or participating in our community events. Visit our 'Get Involved' page for more details.",
  },
  {
    question: "What types of projects do you run?",
    answer:
      "We run a variety of projects including educational programs, health initiatives, and community development projects aimed at improving the quality of life for those in need.",
  },
  {
    question: "How can I donate?",
    answer:
      "Donations can be made through our website via the 'Donate' button. We also accept donations through bank transfers and mobile money.",
  },
  {
    question: "Where are your projects located?",
    answer:
      "Our projects are primarily located in rural and underserved areas of Kenya, including regions like Turkana, Kitui, and Kajiado.",
  },
  {
    question: "How do you ensure transparency?",
    answer:
      "We ensure transparency by providing regular updates on our projects, maintaining detailed financial records, and conducting audits to review our expenditures and impact.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes, we offer remote volunteering opportunities that include tasks like digital marketing, graphic design, and content creation.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Our office hours are Monday to Friday, from 9:00 AM to 5:00 PM. We are closed on weekends and public holidays.",
  },
  {
    question: "Who can I contact for more information?",
    answer:
      "For more information, you can contact us via email at info@ourngo.org or call us at +254 700 000 000.",
  },
  {
    question: "How can I stay updated with your work?",
    answer:
      "You can stay updated by following us on social media, subscribing to our newsletter, and visiting our website regularly for news and updates.",
  },
];

export const teamMembers = [
  {
    name: "Mwangi Kamau",
    role: "Executive Director",
    image: teamMember1,
  },
  {
    name: "Achieng Oduor",
    role: "Project Manager",
    image: teamMember2,
  },
  {
    name: "Fatuma Abdullahi",
    role: "Finance Officer",
    image: teamMember3,
  },
  {
    name: "Otieno Obiero",
    role: "Community Outreach Coordinator",
    image: teamMember4,
  },
];
