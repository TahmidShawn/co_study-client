import img from './../../assets/study2.jpg'

const Hero = () => {
    return (
        <div className="hero mt-20 max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-10 font-bold text-3xl'>
                    <h2>1. Collaborative Learning Community</h2>
                    <h2>2. Expertly Curated Courses</h2>
                    <h2>3. Flexible Learning Experience</h2>
                    <h2>4. Innovative Teaching Methods</h2>
                    <h2>5. Continuous Growth and Updates</h2>

                </div>
            </div>
        </div>
    );
};

export default Hero;