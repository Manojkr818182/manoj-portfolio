import React from 'react'
import { projects } from '../assets/assets'

const Work = () => {
    return (
        <div id='work' className='py-20'>
            <div className='max-w-7xl mx-auto px-6 py-6'>
                <div className='mb-16 text-center'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 mb-6'>
                        Featured
                        <span className='text-teal-600'> Projects</span>
                    </h2>
                    <p className='text-xl max-w-3xl mx-auto'>
                        Cutting-edge web applications built with modern technologies.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                    {
                        projects.map((project, index) => (
                            <div
                                key={index}
                                className="group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300 pb-2"
                            >
                                <div className="relative flex items-center justify-center">
                                    <img
                                        className="group-hover:opacity-100"
                                        src={project.image}
                                        alt=""
                                    />
                                </div>
                                <div className="p-6">
                                    <h3>{project.title}</h3>
                                </div>
                                <p className="text-slate-900 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.techs.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work