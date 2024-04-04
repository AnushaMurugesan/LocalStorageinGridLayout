const form = document.querySelector("#f1");


let data = JSON.parse(localStorage.getItem('user'));
data.map((key) => {
    const box = document.querySelector(".container");
    const ucontainer = document.createElement("DIV");
    ucontainer.className = "grid-container";

    const usname = document.createElement("P");
    usname.className = "cname";
    usname.innerText = "Name";
    var namelabl = document.createElement('label');
    namelabl.className = "label";
    namelabl.innerHTML = key.getusername;

    const usage = document.createElement("P");
    usage.className = 'cage';
    usage.innerText = "Age"
    var agelabl = document.createElement('label');
    agelabl.className = "label";
    agelabl.innerHTML = key.getuserage


    const usmail = document.createElement("P");
    usmail.className = 'cmail';
    usmail.innerText = "Email"
    var maillabl = document.createElement('label');
    maillabl.className = "label";
    maillabl.innerHTML = key.getusermail

    const usabout = document.createElement("DIV");
    usabout.className = 'cabout';
    usabout.innerText = "About";
    var aboutlabl = document.createElement('label');
    aboutlabl.className = "label";
    aboutlabl.innerHTML = key.getuserabout

    var delbutton = document.createElement("button")
    delbutton.className = "delbutton";
    delbutton.innerHTML="DELETE"
    delbutton.id = key.getuserid;
    delbutton.onclick = function (del) {

        
        remove_item = (delbutton.id = key.getuserid);
        delfun = [];
        for (let a of data) {
            if (remove_item != a.getuserid) {

                delfun.push(a);

            }

        }
        localStorage.setItem('user', JSON.stringify(delfun));
        window.location.reload()

    }





    box.appendChild(ucontainer)

    ucontainer.appendChild(usname)
    usname.appendChild(namelabl);


    ucontainer.appendChild(usage);
    usage.appendChild(agelabl);

    ucontainer.appendChild(usmail);
    usmail.appendChild(maillabl);

    ucontainer.appendChild(usabout);
    usabout.appendChild(aboutlabl);

    aboutlabl.appendChild(delbutton);


})


form.addEventListener('submit', addmodal);
function addmodal(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const mail = document.querySelector("#mail").value;
    const about = document.querySelector("#about").value;
    const id = (new Date()).getTime();

    if (localStorage.getItem('user') === null) {
        ob = { getusername: name, getuserage: age, getusermail: mail, getuserabout: about, getuserid: id }
        arr = [];
        arr.push(ob);
        localStorage.setItem('user', JSON.stringify(arr));
        console.log(arr)
    }
    else {
        const getarr = JSON.parse(localStorage.getItem('user'))
        getarr.push({ getusername: name, getuserage: age, getusermail: mail, getuserabout: about, getuserid: id });
        localStorage.setItem('user', JSON.stringify(getarr));
    }
    window.location.reload()
}


















