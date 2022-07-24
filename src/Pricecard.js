import React from "react";
import './custom.css';

function Pricecard() {

    return (
        <div className="">
            <div className="blue-container">
                <div className="card-container">
                    <div className="card-item">
                        <div className="card-topic">
                            <p className="mode">FREE</p>
                            <h2 className="amount">$0<small>/month</small></h2>
                        </div>
                        {/* Specs of card item*/}
                        <div className="specs-of-offer">
                            <p className="specs-item"><span className="tick-mark">✔</span>Single User</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>5GB Storage</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Unlimited Public Projects</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Community Access</p>
                            <p className="specs-item disabled-item"><span className="wrong-mark">✖</span>Unlimited Private Projects</p>
                            <p className="specs-item disabled-item"><span className="wrong-mark">✖</span>Dedicated Phone Support</p>
                            <p className="specs-item disabled-item"><span className="wrong-mark">✖</span>Free Subdomain</p>
                            <p className="specs-item disabled-item"><span className="wrong-mark">✖</span>Monthly Status Reports</p>
                        </div>
                        <div className="button">
                            <button className="btns">Button</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-topic">
                            <p className="mode">PLUS</p>
                            <h2 className="amount">$9<small>/month</small></h2>
                        </div>
                        <div className="specs-of-offer">
                            <p className="specs-item"><span className="tick-mark">✔</span><strong>5 User</strong></p>
                            <p className="specs-item"><span className="tick-mark">✔</span>50GB Storage</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Unlimited Public Projects</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Community Access</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Unlimited Private Projects</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Dedicated Phone Support</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Free Subdomain</p>
                            <p className="specs-item disabled-item"><span className="wrong-mark">✖</span>Monthly Status Reports</p>
                        </div>
                        <div className="button">
                            <button className="btns">Button</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-topic">
                            <p className="mode">PRO</p>
                            <h2 className="amount">$49<small>/month</small></h2>
                        </div>
                        <div className="specs-of-offer">
                            <p className="specs-item"><span className="tick-mark">✔</span><strong>Unlimited Users</strong></p>
                            <p className="specs-item"><span className="tick-mark">✔</span>150GB Storage</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Unlimited Public Projects</p>
                            <p className="specs-item"><span className="tick-mark">✔</span>Community Access</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Unlimited Private Projects</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Dedicated Phone Support</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span><strong>Unlimited</strong> Free Subdomain</p>
                            <p className="specs-item"><span className="wrong-mark">✔</span>Monthly Status Reports</p>
                        </div>
                        <div className="button">
                            <button className="btns">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { Pricecard }