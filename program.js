
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
        -1, -1,
         1, -1,
        -1,  1,
         1,  1
    ];
    //scale to 1/4
    cube = cube.map((x)=>x/4.0);
    cube = cube.map((x)=>x-.5);
    WebGLJs.registerShaders([vertexShader,pixelShader]);
    WebGLJs.registerBuffers([positionBuffer]);
    WebGLJs.draw("position",new Float32Array(cube),4);
});

