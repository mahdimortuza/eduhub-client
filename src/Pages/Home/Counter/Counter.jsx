import CountUp, { useCountUp } from 'react-countup';
import './Counter.css'

const url = "https://images.unsplash.com/photo-1593006961993-32c69e010ca2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"


const Counter = () => {
    useCountUp({
        ref: 'counter',
        end: 1200,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <div
            className='counter-bg text-center mt-10 bg-cover bg-no-repeat py-16 inset-0'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${url})`,
            }}
        >
            <div className='App text-4xl text-white'>
                <div className='content' />
                <br />
                <span id='counter' />
            </div>
            <h1 className='text-white text-3xl md:text-5xl mt-5 font-bold'>Total Graduate</h1>
        </div>

    );
};

export default Counter;