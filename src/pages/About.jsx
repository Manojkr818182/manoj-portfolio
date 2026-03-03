import { aboutInfo, assets } from "../assets/assets";

const About = () => {
    return (
        <div id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    <div className='rounded-2xl p-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
                        About
                        <span className='text-teal-600'> Me</span>
                    </h2>
                         <p className="text-sm text-zinc-500">
                            I’m a passionate Full-Stack Developer with 4+ years of professional experience building scalable,
                            high-performance web applications. I specialize in turning ideas into reliable digital solutions that deliver real business value.
                        </p>
                         <p className="text-sm text-zinc-500">
                            My journey began with simple HTML and CSS websites and has grown into developing complex,
                            full-stack applications using modern frameworks and cloud technologies.                              solved real-world problems, and continuously improved my technical and problem-solving skillss.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-3'>
                            {
                                aboutInfo.map((data, index) => (
                                    <div key={index} 
                                     className="p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center
                                            cursor-pointer hover:border-b-4
                                            hover:border-b-teal-800 hover:border-r-4
                                            hover:border-r-teal-800 hover:-translate-y-1
                                            transition-all duration-300">
                                        <div className='text-orange text-4xl mb-4'>
                                            <data.icon  className="text-teal-500"/>
                                        </div>
                                         <h3 className="text-xl mb-2 font-bold text-zinc-600">{data.title}</h3>
                                         <p className="text-sm text-zinc-500">{data.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='rounded-2xl p-8'>
                        <img className='w-full h-full object-cover'
                            src={assets.profileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About