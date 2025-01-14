let qaw = document.body;

let jdghw = prompt("Birinchi raqamni yozing:");
let dhd = prompt("Ikkinchi raqamni kiriting:");
let wh = prompt("Arifmetik amalni tanlang (+, -, *, /):");

jdghw = Number(jdghw);
dhd = Number(dhd);

let dhwjbd = document.createElement('div');
dhwjbd.style.width = '500px';
dhwjbd.style.height = '200px';
dhwjbd.style.backgroundColor = 'yellow';
dhwjbd.style.display = 'flex';
dhwjbd.style.flexDirection = 'column-reverse';
dhwjbd.style.justifyContent = 'center';
dhwjbd.style.alignItems = 'center';
dhwjbd.style.margin = 'auto';
dhwjbd.style.marginBottom = '20px';
qaw.appendChild(dhwjbd);

let wjbfnw = document.createElement('div');
wjbfnw.style.display = 'flex';
wjbfnw.style.justifyContent = 'center';
wjbfnw.style.marginBottom = '20px';
dhwjbd.appendChild(wjbfnw);

let dgfhnj = document.createElement('button');
dgfhnj.innerText = 'Tekshirish';
dgfhnj.style.backgroundColor = 'green';
dgfhnj.style.color = 'white';
dgfhnj.style.padding = '10px 20px';
dgfhnj.style.border = 'none';
dgfhnj.style.cursor = 'pointer';
dgfhnj.style.fontSize = '16px';
dgfhnj.style.margin = '20px auto';
dgfhnj.style.display = 'block';
wjbfnw.appendChild(dgfhnj);

let hwgdnwb = document.createElement('div');
hwgdnwb.style.display = 'flex';
hwgdnwb.style.gap = '10px';

let fgwb = document.createElement('div');
fgwb.innerText = jdghw;
fgwb.style.border = '2px solid black';
fgwb.style.padding = '10px';
fgwb.style.textAlign = 'center';
fgwb.style.backgroundColor = 'transparent';

let vhdgw = document.createElement('div');
vhdgw.innerText = wh;
vhdgw.style.border = '2px solid black';
vhdgw.style.padding = '10px';
vhdgw.style.textAlign = 'center';
vhdgw.style.backgroundColor = 'transparent';

let xjdbn = document.createElement('div');
xjdbn.innerText = dhd;
xjdbn.style.border = '2px solid black';
xjdbn.style.padding = '10px';
xjdbn.style.textAlign = 'center';
xjdbn.style.backgroundColor = 'transparent';

hwgdnwb.appendChild(fgwb);
hwgdnwb.appendChild(vhdgw);
hwgdnwb.appendChild(xjdbn);

dhwjbd.appendChild(hwgdnwb);

let bdgn = document.createElement('div');
bdgn.id = 'javob';
bdgn.style.marginTop = '20px';
bdgn.style.backgroundColor = 'red';
bdgn.style.padding = '10px';
bdgn.style.display = 'flex';
bdgn.style.justifyContent = 'center';
bdgn.style.alignItems = 'center';
bdgn.style.width = '100%';

let wgdb = document.createElement('h3');
wgdb.innerText = 'Natija: ';
let dgbwg = document.createElement('span');
wgdb.appendChild(dgbwg);
bdgn.appendChild(wgdb);

qaw.appendChild(bdgn);

dgfhnj.addEventListener('click', function() {
    let rfgb;
    if (wh === '+') {
        rfgb = jdghw + dhd;
    } else if (wh === '-') {
        rfgb = jdghw - dhd;
    } else if (wh === '*') {
        rfgb = jdghw * dhd;
    } else if (wh === '/') {
        rfgb = jdghw / dhd;
    } else {
        dgbwg.innerText = "Noto'g'ri amal tanlandi.";
        dgbwg.style.display = 'block';
        return;
    }

    if (!isNaN(rfgb)) {
        dgbwg.innerText = rfgb;
        dgbwg.style.display = 'block';
    } else {
        dgbwg.innerText = "Noto'g'ri raqam yoki amal kiritildi.";
        dgbwg.style.display = 'block';
    }
});
