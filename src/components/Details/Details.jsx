import image1 from './../../assets/1.png';
import image2 from './../../assets/study.jpg';
import image3 from './../../assets/work.jpg';

const Details = () => {
    const images = [
        { src: image1, text: 'Online Courses' },
        { src: image2, text: 'Online Group Study Sessions ' },
        { src: image3, text: 'Study Resources' },
    ];

    return (
        <div className='max-w-6xl mx-auto bg-white p-10 mt-20'>
            <h2 className='text-4xl font-bold'>Co Study : Elevate Your Skills, Learn Together Online.</h2>
            <p className='text-xl my-5'>
                Elevate your expertise through collaborative learning in design and development. Join a thriving community, embrace knowledge, and excel with Co Study
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {images.map((image, index) => (
                    <div key={index} className='relative group'>
                        <img className='w-80 h-72 mx-auto' src={image.src} alt={image.text} />
                        <div className='absolute w-80 mx-auto inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100'>
                            <div className='text-white text-center'>
                                <p className='text-lg'>{image.text}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
