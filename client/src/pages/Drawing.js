import React, { Component } from "react";
import Button from "../../components/Button";
import Canvas from "../../components/Canvas";
import Form from "../../components/Form";

  const Drawing = () => (
        <div class="container">
            <p class="text-right">
                 <a class="aqua" href="/drawings">< Back to Drawings</a>
            </p>
         </div>

        <div class="container">
            <div class="row">
              <div class="col-8">
                  // <img id="imageSource" src="drawing.image"/>
                  <Canvas id="drawingCanvas" width="800" height="600" name="canvas"></canvas>
              </div>


                <div class="col-2">
                 <p class="largeFont">Tools</p>
                 <p>Color</p>
                    <form method="POST" action="/drawings/ drawing._id " name="colorPicker">
                        <input type="color" value="#FF8BCE" name="color" class="colorSelector">
                    </form>
                <p>Brush Size</p>
                    <div class="sizeSelector">
                        <button class="brushSizes btn btn-secondary" id="smallBrush">Small Brush</button>
                        <button class="brushSizes btn btn-secondary" id="mediumBrush">Medium Brush</button>
                        <button class="brushSizes btn btn-secondary" id="largeBrush">Large Brush</button>
                    </div>

                <p>Save/Delete</p>
                <p>Title</p>
                <form method="POST" action="/drawings/drawing._id">
                    <input type="hidden" name="_method" value="PUT">


                        <input type="text" name="title" placeholder="<%= drawing.title %>">

                    <input type="submit" value="Save Drawing" name="saving" class="btn btn-danger"></input>
                </form>
                <br>
                <form method="POST" action="/drawings/drawing._id">
                    <input type="hidden" name="_method" value="DELETE">
                    <input type="submit" value="Delete Drawing" class="btn btn-danger">
                </form>


                </div>

            </div>
        </div>
);


export default Drawing;
    //
    // <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    // <script src="/javascripts/canvas.js" ></script>
    // <script src="/javascripts/redrawCanvas.js" ></script>
    // <script src="/javascripts/saveImage.js" ></script>
