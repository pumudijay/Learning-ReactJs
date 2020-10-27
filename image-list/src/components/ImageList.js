import React from 'react';

const ImageList = (props) => {
    /*const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="image"/>
    })
    */

   if(props.images!=undefined){

    var images = props.images.map((image) => {
        console.log("Images")
     return <img key={image.id} src={image.webformatURL} alt="cropimage"/>
    })
    console.log(images)

   }
   

    return(
        /*<div>Images</div>*/
        <div> {images}</div> 
        
    )
}

export default ImageList;