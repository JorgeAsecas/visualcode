document.addEventListener('DOMContentLoaded', function () {
    var y = 0;
    var x = 0;
    var pulsado = false;
    var imagen = document.getElementById('imagen');

    document.addEventListener('mousedown', function () {
        imagen.setAttribute('src', 'https://imgs.search.brave.com/9CpiT15rLywGKvC_4bcEAu1LAAd0zzs3oYU-4Jd3dh8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODAxMjg2NjAwMTAt/ZmQwMjdlMWU1ODdh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVh4OFpH/OXVZV3hrSlRJd2RI/SjFiWEI4Wlc1OE1I/eDhNSHg4ZkRBPQ');
        pulsado = true;
    });

        document.addEventListener('mousemove', function (event) {
            if(pulsado){
            y = event.clientY;
            x = event.clientX;
            console.log(y)
            console.log(x)
            imagen.style.transform = `translate(${x}px, ${y}px)`;
            }
        });

    document.addEventListener('mouseup', function () {
        imagen.setAttribute('src', 'https://imgs.search.brave.com/EUNWdx114JHp6HFDbY33ew9o_NCCZXu-Cc4RfQSGXjs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90MS51/Yy5sdG1jZG4uY29t/L2VzL3Bvc3RzLzEv/Ny80L2NvbW9fc2Vf/dXNhbl9sb3Nfc2ln/bm9zX2RlX2ludGVy/cm9nYWNpb25fMTk0/NzFfNjAwLmpwZw');
        pulsado = false;

    })
})
