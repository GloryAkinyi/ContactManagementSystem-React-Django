function Upload() {

  
    const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();

    alert(result.message);
    e.target.reset();

    };



    



    return (

        <div className="container mt-5">

            <h2>Upload Product</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="e.g Toys"    required />
                </div>


                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label"> Quantity </label>
                    <input type="number" className="form-control"  id="quantity" name="quantity" placeholder="e.g 3" min="1"  required/>
                </div>


                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price </label>
                    <input type="number" className="form-control" id="price" name="price" placeholder="e.g 500" min="0" step="0.01" required/>
                </div>


                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product Description </label>
                    <textarea name="description" id="description" className="form-control" rows={5}></textarea>
                </div>


                <button type="submit" className="btn btn-primary">Upload Product</button>

            </form>

        </div>

    );

}

export default Upload;