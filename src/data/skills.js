  import { TbBrandRedux,TbBrandJavascript,TbBrandTailwind } from "react-icons/tb";
  import { IoLogoHtml5 ,IoLogoFirebase,IoServer } from "react-icons/io5";
  import { FaBootstrap,FaNodeJs,FaGitAlt,FaReact,FaCode } from "react-icons/fa";
  import { SiExpress ,SiMongodb,SiMongoose, SiRazorpay} from "react-icons/si";
  
  const skillsData = [
    { name: 'React.js', category: 'Frontend', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Redux / Redux Toolkit', category: 'Frontend', icon: TbBrandRedux, color: 'text-purple-400' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', icon: TbBrandJavascript, color: 'text-yellow-400' },
    { name: 'Tailwind CSS', category: 'Frontend' ,icon: TbBrandTailwind, color: 'text-teal-400' },
    { name: 'HTML5 & CSS3', category: 'Frontend', icon: IoLogoHtml5, color: 'text-orange-400' },
    { name: 'Bootstrap', category: 'Frontend', icon: FaBootstrap, color: 'text-indigo-400' },
    { name: 'Node.js', category: 'Backend', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', category: 'Backend', icon: SiExpress, color: 'text-gray-400' },
    { name: 'RESTful APIs', category: 'Backend', icon: IoServer, color: 'text-blue-400' },
    { name: 'EJS Templates', category: 'Backend', icon: FaCode, color: 'text-red-400' },
    { name: 'MongoDB', category: 'Database & Tools', icon: SiMongodb, color: 'text-emerald-500' },
    { name: 'Mongoose ORM', category: 'Database & Tools', icon:SiMongoose, color: 'text-red-500' },
    { name: 'Firebase Hosting', category: 'Database & Tools', icon: IoLogoFirebase, color: 'text-amber-500' },
    { name: 'Git & GitHub', category: 'Database & Tools', icon: FaGitAlt, color: 'text-slate-300' },
    { name: 'Razorpay Integration', category: 'Database & Tools', icon: SiRazorpay, color: 'text-blue-500' },
  ];
   export default skillsData;
