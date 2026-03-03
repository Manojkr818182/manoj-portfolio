import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div id='contact' className='py-20'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-16'>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                        Get In <span className='text-teal-800'>Touch</span>
                    </h1>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
                        Feel free to get in touch with me for collaboration, freelance projects, or full-time opportunities. I'm always open to discussing new ideas and exciting projects. Let’s build something amazing together!.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className='flex items-start'>
                            <div className='text-teal-500 text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p>Varanasi, Uttar Pradesh</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-teal-500 text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p>manoj818182@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-teal-500 text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p>+91 8181820106</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='max-w-3xl mx-auto'>
                    <form className='space-y-'></form>
                </div>
            </div>
        </div>
    )
}
export default Contact;