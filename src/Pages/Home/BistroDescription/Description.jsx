import img from '../../../assets/home/chef-service.jpg'

const Description = () => {
    return (
        <section style={{backgroundImage: `url(${img})`}} className='mb-[92px]'>

            <div className='lg:p-[150px]'>
            <div className='lg:mx-[112px] px-[96px] py-[50px] bg-white flex flex-col items-center justify-center'>
            <h1 className='lg:text-[45px] text-center'>Bistro Boss</h1>
                <p className='text-center lg:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            </div>

        </section>
    );
};

export default Description;