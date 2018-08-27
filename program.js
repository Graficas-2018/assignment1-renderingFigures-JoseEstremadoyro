
document.addEventListener("DOMContentLoaded",function(event){

    var vertexShader = {
        id:"vertexShader",
        type:WebGLJs.gl.VERTEX_SHADER
    };

    var pixelShader = {
        id:"fragmentShader",
        type:WebGLJs.gl.FRAGMENT_SHADER
    };
    var positionBuffer ={
        id:"position",
        size:2,
        type:WebGLJs.gl.FLOAT
    }; 
    var cube = [
        -.5, -.5,
        -.5,  .5,
         .5, -.5,
         .5,  .5
    ];
    WebGLJs.registerShaders([vertexShader,pixelShader]);
    WebGLJs.registerBuffers([positionBuffer]);
    WebGLJs.draw("position",new Float32Array(cube),4);
});

