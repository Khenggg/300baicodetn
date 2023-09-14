input1.addEventListener('keydown', function(event){
    if (event.key === 'Enter' ){
        button1.click();
    }
});
function exercize1(){
    var input1 = document.getElementById('input1');
    var button1 = document.getElementById('button1');
    const a = parseFloat(input1.value);
    function caculateVolumne(){
    const b = Math.sqrt(a/(4*Math.PI));
    const c = (a*b)/3;
    return c;
    }
    if (isNaN(a)) {
        document.getElementById('result1').textContent = "You must be input number before caculate";
    }
    else{
        var d = document.getElementById('result1');
        var formula =  "<br>" + "S= 4πR^2" + "<br>" + "V=4/3πR^3";
        d.innerHTML = caculateVolumne().toFixed(2) + formula;
    }
}
/*  Version Upgrade
    function exercize1() {
            var input1 = document.getElementById('input1');
            var button1 = document.getElementById('button1');
            var result1 = document.getElementById('result1');

            function calculateVolume() {
                const radius = parseFloat(input1.value);
                if (isNaN(radius)) {
                    result1.innerHTML = "You must enter a valid number before calculating.";
                } else {
                    const surfaceArea = 4 * Math.PI * radius * radius;
                    const volume = (4 / 3) * Math.PI * radius * radius * radius;
                    const formula = "<br>" + "Surface Area = 4πR^2" + "<br>" + "Volume = 4/3πR^3";
                    result1.innerHTML = `Surface Area: ${surfaceArea.toFixed(2)}<br>Volume: ${volume.toFixed(2)}${formula}`;
                }
            }

            calculateVolume();
        }

        var input1 = document.getElementById('input1');
        input1.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                exercize1();
            }
        });
*/

function exercise2(){
    var input2_1 = document.getElementById('input2_1');
    var input2_2 = document.getElementById('input2_2');
    var result2 = document.getElementById('result2');
    
}