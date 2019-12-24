var filenum = 0;//non-zfill
var maxfile = 0;//max-file
var speed = 1000;//ms
var bool = false;
var inc = 10;//ms
var si1;
function zfill(num, digit){
    var n0 = num.toString();
    if (n0.length < digit){
        var div = digit - n0.length;
        var l = [];
        for (i=0;i<div;i++) l.push("0");
        var z = l.join("");
        return z + n0;
    }else{
        return n0;
    }
}
function fileset(){
    var val = parseInt(document.getElementById('filecount').value);
    if (val < 0){
        window.alert('Enter incremental within 10 seconds...');
        setTimeout(function() {
            val = document.getElementById('filecount').value;
            if (val === "e"){
                window.alert('Error: Please enter NUMBER...');
            }else{
                inc = parseInt(val);
                window.alert('Success...');
                document.getElementById('filecount').value = maxfile;
                document.getElementById('filecount').disabled = true;
                document.getElementById('filecount').style = "background-color: #ffffff;text-align: center;color: #000000;";
            }
        }, 10000);
    }else{
        maxfile = parseInt(val);
        document.getElementById('if-1').src = "img" + zfill(filenum.toString(), 3) + ".png";
        document.getElementById('maxfile').innerHTML = zfill(maxfile, 3);
        document.getElementById('filecount').disabled = true;
        document.getElementById('filecount').style = "background-color: #ffffff;text-align: center;color: #000000;";
    }
}
function fileset_files(){
    
}
function re_set(){
    document.getElementById('filecount').disabled = false;
}
function tostart(){
    filenum = 0;
    back();
}
function toend(){
    filenum = maxfile;
    forward();
}
function back(){
    filenum --;
    if (filenum < 0) filenum = 0;
    document.getElementById('if-1').src = "img" + zfill(filenum.toString(), 3) + ".png";
    document.getElementById('nowfile').innerHTML = zfill(filenum, 3);
}
function forward(){
    filenum ++;
    if (filenum > maxfile) filenum = maxfile;
    document.getElementById('if-1').src = "img" + zfill(filenum.toString(), 3) + ".png";
    document.getElementById('nowfile').innerHTML = zfill(filenum, 3);
}
function increase(){
    speed += inc;
    document.getElementById('nowfast').innerHTML = zfill(speed, 4);
}
function decrease(){
    speed -= inc;
    if (speed <= 0) speed += inc;
    document.getElementById('nowfast').innerHTML = zfill(speed, 4);
}
function begin(){
    if (! bool){
        bool = true;
        var ct = 0;
        setTimeout(function() {
            si1 = setInterval(function (){
                forward();
                if (ct > maxfile){
                    tostart();
                    ct = 0;
                }
                ct ++;
            }, speed);
        }, 1000);
    }else{
        window.alert('Error: Already started...');
    }
}
function pause(){
    clearInterval(si1);
    bool = false;
}