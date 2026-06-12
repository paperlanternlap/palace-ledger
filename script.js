

const characters = [

{
player:"แป้ง",
name:"หลี่ซูเหยา",
role:"พระสนม",
position:"ซู่อี้",
palace:"บุปผา",
rp:1200,
favor:35,
items:["หยกขาว x1","จดหมายลับ x2"]
},

{
player:"เมย์",
name:"จ้าวอิงเยว่",
role:"นางกำนัล",
position:"ซ่างกง",
palace:"ชิงเหอ",
rp:900,
favor:12,
items:["ผ้าไหม x3"]
}

];
function renderCharacters(){

    const container = document.getElementById("characters");

    container.innerHTML = "";

    characters.forEach(character => {

        container.innerHTML += `

        <div class="card">

        <h2>${character.name}</h2>

        <div>ผู้เล่น : ${character.player}</div>

        <div class="role">
        ${character.role} | ${character.position}
        </div>

        <div>ตำหนัก : ${character.palace}</div>

        <div class="stat">
        RP : ${character.rp}
        </div>

        <div class="stat">
        โปรดปราน : ${character.favor}
        </div>

        <div class="stat">
        ไอเท็ม :
        <ul>
        ${character.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
        </div>

        <button>แก้ไข</button>

        </div>

        `;

    });

}

renderCharacters();

function showForm(){

    const form = document.getElementById("formArea");

    if(form.style.display === "none"){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }

}

function addCharacter(){

    characters.push({

        player: document.getElementById("player").value,

        name: document.getElementById("name").value,

        role: document.getElementById("role").value,

        position: document.getElementById("position").value,

        palace: document.getElementById("palace").value,

        rp: document.getElementById("rp").value,

        favor: document.getElementById("favor").value,

        items: []

    });

    renderCharacters();
    alert("เพิ่มตัวละครแล้ว!");
    document.getElementById("player").value = "";
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("position").value = "";
    document.getElementById("palace").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("favor").value = "";

}
