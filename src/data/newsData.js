import national1 from "../assets/national1.jpg";
import national2 from "../assets/national2.jpg";
import national3 from "../assets/national3.jpg";
import national4 from "../assets/national4.jpg";
import national5 from "../assets/national5.webp";
import national6 from "../assets/national6.jpg";

import international1 from "../assets/international1.jpg";
import international2 from "../assets/international2.jpg";
import international3 from "../assets/international3.jpeg";
import international4 from "../assets/international4.webp";
import international5 from "../assets/international5.jpg";
import international6 from "../assets/international6.jpg";

import sports1 from "../assets/sports1.jpg";
import sports2 from "../assets/sports2.jpg";
import sports3 from "../assets/sports3.jpeg";
import sports4 from "../assets/sports4.jpg";
import sports5 from "../assets/sports5.webp";
import sports6 from "../assets/sports6.jpg";

import technology1 from "../assets/technology1.jpg";
import technology2 from "../assets/technology2.jpg";
import technology3 from "../assets/technology3.jpg";
import technology4 from "../assets/technology4.jpg";
import technology5 from "../assets/technology5.jpg";
import technology6 from "../assets/technology6.jpg";

const newsData = [
  // ===== NATIONAL =====
  {
    id: 1,
    title: "Government Launches New Education Reform",
    description: "A comprehensive education reform aims to modernize schools nationwide.",
    content: "The government has announced a major education reform plan today aimed at improving the quality of schools across the country. This initiative includes updating curriculum, introducing digital classrooms, and providing teacher training programs. Officials emphasize that this reform will help students be better prepared for the global economy.\nThe plan is expected to be implemented in phases over the next two years, with priority given to underdeveloped regions. Education experts have welcomed the initiative but warn that careful monitoring will be required to ensure success.",
    image: national1,
    category: "National",
    date: "2026-01-01",
    isTrending: true
  },
  {
    id: 2,
    title: "New Highway Opens Connecting Major Cities",
    description: "A 200 km highway opens, reducing travel time significantly.",
    content: "The government inaugurated a new 200 km highway connecting the capital to the northern provinces. Officials claim that the new road will cut travel time by up to 50% and improve trade and mobility.\nThe highway includes modern safety features, multiple rest stops, and toll-free zones for commercial vehicles. Citizens have welcomed the development, expecting it to boost regional commerce.",
    image: national2,
    category: "National",
    date: "2026-01-03",
    isTrending: false
  },
  {
    id: 3,
    title: "National Healthcare Initiative Expanded",
    description: "Free healthcare services extended to rural areas under new program.",
    content: "The Ministry of Health announced that the National Healthcare Initiative will now cover more rural areas. Mobile clinics and telemedicine services will be deployed to reach remote communities.\nOfficials stated that this expansion aims to provide preventive care and reduce hospital overcrowding in urban centers. The program will be monitored quarterly for effectiveness.",
    image: national3,
    category: "National",
    date: "2026-01-05",
    isTrending: true
  },
  {
    id: 4,
    title: "Parliament Passes New Labor Law",
    description: "New labor laws focus on worker safety and fair wages.",
    content: "Parliament approved a new labor law today that aims to improve workplace safety and ensure fair wages for all employees. The law includes provisions for overtime, mandatory breaks, and stricter penalties for violations.\nBusiness groups have expressed concerns about increased compliance costs, but labor unions say the law is a positive step toward protecting workers' rights. Implementation will begin next month with inspections in key industries.",
    image: national4,
    category: "National",
    date: "2026-01-07",
    isTrending: false
  },
  {
    id: 5,
    title: "City Introduces Smart Traffic System",
    description: "New AI-powered traffic lights aim to reduce congestion.",
    content: "The city council has implemented a smart traffic system that adjusts signals based on real-time traffic conditions. This technology is expected to decrease congestion and improve travel times.\nCommuters have already noticed smoother flows during peak hours. Future updates may include pedestrian safety enhancements and integration with public transport.",
    image: national5,
    category: "National",
    date: "2026-01-09",
    isTrending: false
  },
  {
    id: 6,
    title: "National Park Conservation Efforts Strengthened",
    description: "Government invests in protecting biodiversity and wildlife.",
    content: "The Ministry of Environment announced additional funding for national parks to enhance conservation efforts. This includes wildlife monitoring, anti-poaching measures, and eco-tourism initiatives.\nExperts say that these efforts will help preserve endangered species and maintain natural habitats for future generations.",
    image: national6,
    category: "National",
    date: "2026-01-11",
    isTrending: false
  },

  // ===== INTERNATIONAL =====
  {
    id: 7,
    title: "Global Summit on Climate Change Concludes",
    description: "World leaders agree on new carbon reduction targets.",
    content: "The annual Global Summit on Climate Change concluded with leaders agreeing to stricter carbon reduction targets for the next decade. Commitments include renewable energy investments and international cooperation on emissions monitoring.\nEnvironmental groups praised the agreements but urged immediate action to prevent further climate deterioration. The summit highlighted the urgency of climate resilience policies worldwide.",
    image: international1,
    category: "International",
    date: "2026-01-02",
    isTrending: true
  },
  {
    id: 8,
    title: "New Trade Agreement Signed Between Countries",
    description: "A historic trade agreement aims to increase exports and imports.",
    content: "A new trade agreement was signed today between neighboring countries to enhance economic cooperation. The deal includes reduced tariffs on key products, simplified customs procedures, and joint investment initiatives.\nAnalysts predict a significant boost to bilateral trade, with potential benefits for small and medium-sized enterprises. Governments will review the progress annually to ensure compliance.",
    image: international2,
    category: "International",
    date: "2026-01-04",
    isTrending: false
  },
  {
    id: 9,
    title: "International Space Mission Launch Successful",
    description: "A joint space mission successfully enters orbit.",
    content: "A collaborative international space mission successfully launched today, entering orbit as planned. Scientists aim to study cosmic radiation and gather data on distant asteroids.\nThe mission marks a milestone in international space cooperation, with multiple countries contributing technology and expertise. Results are expected to enhance understanding of planetary formation.",
    image: international3,
    category: "International",
    date: "2026-01-06",
    isTrending: true
  },
  {
    id: 10,
    title: "World Health Organization Issues Alert",
    description: "New health advisory issued regarding seasonal flu outbreak.",
    content: "The World Health Organization (WHO) issued a global health advisory today warning of an early seasonal flu outbreak. Countries are urged to increase vaccination campaigns and prepare hospitals for increased patient loads.\nWHO officials emphasized hygiene, mask-wearing, and timely medical attention to control the spread. Travel advisories are in place for affected regions.",
    image: international4,
    category: "International",
    date: "2026-01-08",
    isTrending: false
  },
  {
    id: 11,
    title: "International Finance Forum Releases Report",
    description: "Global economic outlook improves according to new report.",
    content: "The International Finance Forum released its quarterly report, highlighting improvements in global economic indicators such as GDP growth, employment rates, and trade balances.\nExperts recommend continued cooperation among nations to sustain growth and manage risks related to inflation and supply chain disruptions.",
    image: international5,
    category: "International",
    date: "2026-01-10",
    isTrending: false
  },
  {
    id: 12,
    title: "Tech Diplomacy Enhances Global Collaboration",
    description: "Countries join forces on AI and space tech initiatives.",
    content: "Several countries signed agreements to collaborate on artificial intelligence and space technology research. The partnerships aim to share resources, knowledge, and talent to accelerate innovation.\nOfficials emphasized the need for ethical frameworks and security standards in emerging technologies to ensure responsible development.",
    image: international6,
    category: "International",
    date: "2026-01-12",
    isTrending: false
  },

  // ===== SPORTS =====
  {
    id: 13,
    title: "National Football Team Wins Championship",
    description: "Historic victory for the national football team in international tournament.",
    content: "The national football team secured a historic win in the international championship, defeating long-time rivals in a thrilling final. Fans celebrated across the country, praising teamwork and strategy.\nCoaches highlighted the importance of youth development programs that contributed to this success. Plans are underway to host a victory parade and honor the team with medals.",
    image: sports1,
    category: "Sports",
    date: "2026-01-03",
    isTrending: true
  },
  {
    id: 14,
    title: "Local Marathon Breaks Participation Record",
    description: "Thousands of runners join the city marathon this year.",
    content: "The annual city marathon saw record participation this year, with over 10,000 runners competing across multiple categories. Organizers emphasized safety, hydration stations, and environmental sustainability.\nWinners from each category received medals and cash prizes. Community members praised the event for promoting fitness and inclusivity.",
    image: sports2,
    category: "Sports",
    date: "2026-01-05",
    isTrending: false
  },
  {
    id: 15,
    title: "Basketball League Finals Announced",
    description: "Top teams prepare for the highly anticipated basketball league finals.",
    content: "The national basketball league announced the schedule for this year's finals, featuring the top four teams. Fans are eagerly anticipating intense matches and star player performances.\nTeams are engaging in final training sessions and strategy planning. Organizers expect full attendance and nationwide TV coverage for the finals.",
    image: sports3,
    category: "Sports",
    date: "2026-01-07",
    isTrending: false
  },
  {
    id: 16,
    title: "Tennis Championship Draw Completed",
    description: "Players and fans await the opening match of the tennis championship.",
    content: "The tennis championship draw was completed today, determining match-ups for the opening round. Top-ranked players are expected to face exciting challenges in early games.\nOfficials have implemented new safety protocols and live streaming options. Tennis enthusiasts are looking forward to thrilling matches and possible upsets.",
    image: sports4,
    category: "Sports",
    date: "2026-01-09",
    isTrending: false
  },
  {
    id: 17,
    title: "City Soccer Tournament Highlights Young Talent",
    description: "Local youth teams shine in annual soccer tournament.",
    content: "The annual city soccer tournament showcased talented young athletes from various schools and clubs. Scouts attended to identify promising players for national programs.\nThe event emphasized sportsmanship, teamwork, and community engagement, drawing a large audience and media coverage.",
    image: sports5,
    category: "Sports",
    date: "2026-01-11",
    isTrending: false
  },
  {
    id: 18,
    title: "Regional Basketball Championship Concludes",
    description: "Teams compete for regional title with thrilling matches.",
    content: "The regional basketball championship concluded with exciting matches and notable performances. Coaches praised the players' skills and determination.\nOrganizers plan to expand the championship next year to include more teams and attract sponsors, boosting local sports culture.",
    image: sports6,
    category: "Sports",
    date: "2026-01-13",
    isTrending: true
  },

  // ===== TECHNOLOGY =====
  {
    id: 19,
    title: "Tech Company Releases Innovative Smartphone",
    description: "New smartphone features advanced AI and foldable display.",
    content: "A leading tech company launched its latest smartphone today, featuring a foldable display, advanced AI integration, and enhanced security features. Analysts predict high market demand.\nEarly reviews highlight the innovative design, camera quality, and performance improvements. Consumers are excited about the upcoming release dates and pre-order campaigns.",
    image: technology1,
    category: "Technology",
    date: "2026-01-02",
    isTrending: false
  },
  {
    id: 20,
    title: "Cybersecurity Summit Highlights Risks",
    description: "Experts discuss emerging cybersecurity threats and solutions.",
    content: "At the annual cybersecurity summit, experts discussed emerging threats in digital security, including ransomware attacks and data breaches. Companies were advised to enhance employee training and update security protocols.\nThe summit emphasized international cooperation and technology innovation as key strategies to protect critical infrastructure and personal data.",
    image: technology2,
    category: "Technology",
    date: "2026-01-04",
    isTrending: false
  },
  {
    id: 21,
    title: "AI Startup Secures Major Funding",
    description: "Startup developing AI-driven healthcare tools receives $50M investment.",
    content: "An AI startup focused on healthcare analytics received $50 million in funding from venture capital firms. The company plans to expand its AI-driven diagnostic tools and telemedicine platforms.\nHealthcare professionals anticipate that these innovations will streamline patient care, improve diagnostics, and reduce costs in the coming years.",
    image: technology3,
    category: "Technology",
    date: "2026-01-06",
    isTrending: true
  },
  {
    id: 22,
    title: "Breakthrough in Renewable Energy Technology",
    description: "Scientists develop more efficient solar panels for commercial use.",
    content: "Researchers announced a breakthrough in renewable energy with solar panels achieving record efficiency rates. The technology promises to reduce costs and increase adoption for both commercial and residential use.\nGovernment agencies are reviewing incentives to accelerate implementation. Experts say this development could significantly impact global energy sustainability.",
    image: technology4,
    category: "Technology",
    date: "2026-01-08",
    isTrending: false
  },
  {
    id: 23,
    title: "Quantum Computing Startup Raises Funding",
    description: "New funding will accelerate development of quantum processors.",
    content: "A quantum computing startup secured $30 million in funding from investors. The funds will support research into scalable quantum processors, software development, and collaboration with academic institutions.\nIndustry experts predict that breakthroughs could revolutionize computation speed and problem-solving capabilities.",
    image: technology5,
    category: "Technology",
    date: "2026-01-10",
    isTrending: false
  },
  {
    id: 24,
    title: "AI-Powered Smart Home Devices Launch",
    description: "Smart home gadgets integrated with AI for automation.",
    content: "A tech company unveiled a new line of AI-powered smart home devices, including security cameras, thermostats, and lighting systems. The devices adapt to user behavior and can be controlled via mobile apps.\nConsumers expect the products to enhance convenience, energy efficiency, and security at home.",
    image: technology6,
    category: "Technology",
    date: "2026-01-12",
    isTrending: true
  }
];

export default newsData;
