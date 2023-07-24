import React from 'react';

const AddReview = () => {
    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const userName = form.userName.value 
        const feedback = form.feedback.value 
        const rating = form.rating.value 
        const data = {userName, feedback, rating}
        console.log(data)

        fetch('https://collage-management-application-server-mahdiwebx-gmailcom.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='w-96 mx-auto'>
            <h1 className='mt-10 text-xl'> Write a review for us.</h1>
            <form onSubmit={handleReview}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input required type="text" name='userName' placeholder="name" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your review</span>
                    </label>
                    <input required type="text" name='feedback' placeholder="review" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input required type="number" name='rating' min="1" max="5" pattern="[0-5]" placeholder="rating" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input required type='submit' className="btn bg-blue-500 text-white hover:bg-blue-700" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;