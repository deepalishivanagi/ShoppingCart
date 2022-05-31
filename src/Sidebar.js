import { useContext } from "react";
import { useState } from "react/cjs/react.production.min";
import {AppStateContext} from "./AppProvider";
import { FilterStateContext } from "./FilterProvider";

export default function Sidebar(){

   
    const {PriceRangeHandler,LowtoHighHandler,HightoLowHandler,HighRateHandler,
        MidRateHandler,LowRateHandler,CategoryHandler,ClearBtnHandler}=useContext(FilterStateContext);


  

    return(
        <form className="main-Sidebar flex-container">
          
            <div className="Filter-1 Horizontal-wrapper flex-col">
                <div className="Filter-header">
                     <p>Filter</p>
                    <p><button onClick={ClearBtnHandler}>Clear All</button></p>
                 </div>
                <div className="PriceSlider-container ">
                    <p>Price</p>
                    <p>
                        <input type="range" min="1" max="2000"  step="1" className="Price-slider" onChange={(event)=>{PriceRangeHandler(event.target.value)}}></input>
                        <label for="Price-slider">PriceRange</label>
                    </p>
                </div>
            </div>
            <div className="Horizontal-wrapper flex-col">
                <div className="Filter-sort">
                    <p>Sort By </p>
                    <p>Price</p>
                </div>
                <div>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="radio" name="price" onChange={LowtoHighHandler}></input>low to high
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="price" onChange={HightoLowHandler}></input>high to low
                        </li>
                    </ul>
                </div>

            </div>
            {/* <div className="Horizontal-wrapper flex-col">
                <div className=" Filter-header ">
                    <p>Sort By Availability</p>
                    <p><button>Clear All</button></p>
                </div>
                <div>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="checkbox"></input>Include out of stock
                        </li>
                        <li className="flex-row">
                            <input type="checkbox"></input>Fast Delivery only
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className="Horizontal-wrapper flex-col">
                <div className=" Filter-sort ">
                    <p>Sort By </p>
                    <p>Ratings</p>
                </div>
                <div>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="radio" name="rates" onChange={HighRateHandler}></input>4* and above
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="rates" onChange={MidRateHandler}></input>3* to 4*
                        </li>
                        <li className="flex-row">
                            <input type="radio" name="rates" onChange={LowRateHandler}></input>3* and below
                        </li>
                    </ul>
                </div>

            </div>
            <div className="Horizontal-wrapper flex-col">
                <div className=" Filter-sort ">
                    <p>Sort By </p>
                    <p>Category</p>
                </div>
                <div>
                    <form>
                    <ul className="PriceList flex-col">
                        <li className="flex-row">
                            <input type="checkbox" name='Category' value="men's clothing" onChange={(e)=>{CategoryHandler(e)}}></input> Men's clothing
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' value="jewelery" onChange={(e)=>{CategoryHandler(e)}}></input> Jewelery
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' value="electronics" onChange={(e)=>{CategoryHandler(e)}}></input> Electronics
                        </li>
                        <li className="flex-row">
                            <input type="checkbox" name='Category' value="women's clothing" onChange={(e)=>{CategoryHandler(e)}}></input> Women's clothing
                        </li>
                    </ul>
                    </form>
                </div>

            </div>


        </form>

    );
}