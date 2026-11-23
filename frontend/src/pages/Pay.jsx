
function Pay() {

    return (

        <div className="container mt-5">

            <div className="card shadow p-4 mx-auto" style={{ maxWidth: "450px" }}>

                <h3 className="text-center mb-4">Make Payment</h3>

                <form>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" name="phone" value="254" placeholder="e.g. 0712345678" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Amount (KES)</label>
                        <input type="number" className="form-control" name="amount" placeholder="Enter amount" min="1" required />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Pay Now</button>

                </form>

            </div>

        </div>

    );

}

export default Pay;
