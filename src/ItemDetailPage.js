import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppStateContext } from "./AppProvider";
import "./ItemDetailPage.css";

export default function ItemDetailPage()
{
    const {Item_id} = useParams();
    var {DataArray} =useContext(AppStateContext);
    var temp=[];

    for(var i=0;i<DataArray.length;i++)
    {
        
        if(DataArray[i].id==Item_id)
        {
            temp.push(DataArray[i]);

        }
       
    }

    return(
        <div className="DetailPage-flex-container">
            <div id="Image-Container" style={{height:"50%" }}>
                <img src={temp[0].image}></img>
            </div>
            <div id="Image-detail">
                <h2>{temp[0].title}</h2>
                <h2>{temp[0].description}</h2>
                <h2>{temp[0].price}</h2>
                <h2>{temp[0].category}</h2>
            </div>

        </div>
    );
}