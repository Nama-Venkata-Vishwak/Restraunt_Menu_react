import React from 'react'
import ItemCard from './ItemCard'


export default function Menu() {
    return (
        <div className='container'>
            <hr className='mt-2' />
           <h1 className='text-center'>Menu</h1> 
            <hr/>
            {/* QuickAcess */}
            <div className="row  d-md-flex mb-4">
                    <div className="col  col-md-8">
                        <button type="button" class="btn btn-outline-success ms-2 mt-3">Breakfast</button>
                        <button type="button" class="btn btn-outline-success ms-2 mt-3">Biriyani</button>
                        <button type="button" class="btn btn-outline-success ms-2 mt-3">Indian Breads</button>
                        <button type="button" class="btn btn-outline-success ms-2 mt-3">Curries</button>
                        <button type="button" class="btn btn-outline-success ms-2 mt-3">Hot Beverages</button>
                    </div>
                    <div className="col-md-4 mt-3">
                        <form class="d-flex position relative end=0" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
            </div>
            
            
            {/* Food List */}
            <div className="row mt-2">
                <ItemCard/>
            </div>

        </div>
    )
}
