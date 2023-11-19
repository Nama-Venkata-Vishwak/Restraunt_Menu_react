import React, { useState } from 'react'
import './style.css'
export default function (props) {
    const [count, setCount]=useState(0);
    return (
        <div>
            <div class="col-sm-4 mb-3">
                <div class="card rounded-5">
                    <div class="card-body">
                        <img src="http://source.unsplash.com/1600x600/?teacup" alt="" class="img-fluid rounded-3 mb-2" />
                        <h3>Tea</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, repellendus.</p>
                        <div class="row justify-content-spacebewteen align-items-center">
                            <div class="col-6">
                                <h2>₹12</h2>
                            </div>
                            <div class="col-6 d-flex justify-content-end align-items-center">
                                <button class="decbtn" disabled={count<=0} onClick={()=>setCount(count-1)}>-</button>
                                <div class="qty-num"><span id="count">{count}</span></div>
                                <button class="incbtn" onClick={()=>setCount(count+1)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


