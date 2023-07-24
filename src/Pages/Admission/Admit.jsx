import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Admit = () => {

    const collage = useLoaderData()
    const { collegeName } = collage


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const collage_name = form.collage_name.value
        const name = form.name.value
        const subject = form.subject.value
        const email = form.email.value
        const phone = form.phone.value
        const address = form.address.value
        const birth = form.birth.value
        const Image = form.Image.value
        const student = { collage_name, name, subject, email, address, phone, birth, Image }
        console.log(student)

        fetch('http://localhost:5000/students', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

            form.reset()

    }

    return (
        <div className='mt-16'>
            <h1 className='text-3xl'>You are getting admission at: <span className='font-semibold'>{collegeName}</span></h1>
            <div className="hero mt-16"> {/* Make sure "hero" class is defined in your CSS */}
                <form onSubmit={handleSubmit}>
                    <div className="hero-content"> {/* Make sure "hero-content" class is defined in your CSS */}
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Collage Name</span>
                                    </label>
                                    <input required type="text" name='collage_name' defaultValue={collegeName} className="input input-bordered" />
                                </div>

                                <div className='md:flex'>
                                    <div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input required type="text" name='name' placeholder="name" className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Subject</span>
                                            </label>
                                            <input required type="text" name='subject' placeholder="subject" className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                                        </div>
                                    </div>

                                    <div className='md:ml-5'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Phone</span>
                                            </label>
                                            <input required type="number" name='phone' placeholder="phone" className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Address</span>
                                            </label>
                                            <input required type="text" name='address' placeholder="address" className="input input-bordered" />
                                        </div>

                                        <div className="form-control">
                                            <label htmlFor="birth" className="label">
                                                <span className="label-text">Date of birth</span>
                                            </label>
                                            <input required type="date" name="birth" placeholder="date of birth" className="input input-bordered" />
                                        </div>
                                    </div>
                                </div>

                                {/* image field  */}

                                <div className="form-control">
                                    <label htmlFor="image" className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input required type="text" name="Image" placeholder="your image link" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input required type='submit' className="btn bg-blue-500 text-white hover:bg-blue-700" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admit;
