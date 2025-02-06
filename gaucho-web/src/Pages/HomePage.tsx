// import React from 'react';
// // import { Menu, X, 
// import { Code, Database, Cpu } from 'lucide-react';

// export const HomePage: React.FC = () => {
// //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         {/* Animated background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
//           <div className="absolute inset-0">
//             <div className="grid grid-cols-6 gap-4 opacity-20 animate-pulse">
//               {Array.from({ length: 24 }).map((_, i) => (
//                 <div 
//                   key={i}
//                   className="h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
//           <div className="text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//                 Innovation Through Automation
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//               Transforming ideas into powerful solutions with cutting-edge technology
//             </p>
            
//             {/* Feature icons */}
//             <div className="flex justify-center space-x-12 mb-12">
//               <div className="flex flex-col items-center">
//                 <div className="p-4 bg-blue-500/20 rounded-full mb-4">
//                   <Code size={32} className="text-blue-400" />
//                 </div>
//                 <span>Development</span>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="p-4 bg-purple-500/20 rounded-full mb-4">
//                   <Database size={32} className="text-purple-400" />
//                 </div>
//                 <span>Automation</span>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="p-4 bg-indigo-500/20 rounded-full mb-4">
//                   <Cpu size={32} className="text-indigo-400" />
//                 </div>
//                 <span>Software</span>
//               </div>
//             </div>

//             <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { Code, Database, GitBranch, Terminal, Laptop, Brain, Rocket, Zap } from 'lucide-react';
// import Navbar from '../Components/Navbar';

export const HomePage: React.FC = () => {
  const services = [
    { icon: Code, title: 'Custom Development', description: 'Tailored solutions built with cutting-edge technologies' },
    { icon: Database, title: 'Process Automation', description: 'Streamline workflows and boost efficiency' },
    { icon: Brain, title: 'AI Integration', description: 'Implement smart solutions for your business needs' }
  ];

  const features = [
    { icon: Terminal, title: 'Clean Code', description: 'Following best practices and design patterns' },
    { icon: GitBranch, title: 'Version Control', description: 'Organized and secure code management' },
    { icon: Laptop, title: 'Responsive Design', description: 'Perfect experience on all devices' }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-900">
      {/* <Navbar /> */}

      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-px bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Innovation Through Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slideUp">
              Building the future with code, one project at a time
            </p>
            
            <div className="flex justify-center gap-6">
              <button className="group relative px-8 py-3 text-lg font-semibold rounded-full overflow-hidden bg-cyan-600 hover:bg-cyan-700 transition-colors">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
              <button className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-cyan-500 hover:bg-cyan-500/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full mb-4 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all">
                    <Icon size={32} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <Icon size={32} className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Rocket, value: '100+', label: 'Projects Completed' },
              { icon: Zap, value: '50+', label: 'Happy Clients' },
              { icon: Code, value: '1M+', label: 'Lines of Code' },
              { icon: Brain, value: '24/7', label: 'Support' }
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="group">
                <div className="flex flex-col items-center">
                  <Icon size={32} className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                    {value}
                  </div>
                  <div className="text-gray-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};