const banner = [
  {
    keybanner: "banner1.jpg",
  },
  {
    keybanner: "banner2.jpg",
  },
];

document.getElementById(
  "activeImage"
).innerHTML = `<img src="${banner[0]["keybanner"]}"/>`;
document.getElementById(
  "carouselItem"
).innerHTML = `<img src="${banner[1]["keybanner"]}"/>`;

const menue = [
  {
    keyMenue: "ទំព័រដើម",
    item: [{ link: "index.html" }],
  },
  {
    keyMenue: "ដំណាំ",
    item: [{ link: "cropPage.html" }],
  },
  {
    keyMenue: "ការចិញ្ចឹមសត្វ",
    item: [{ link: "jungle.html" }],
  },
  {
    keyMenue: "ទីផ្សារ",
    item: [{ link: "market.html" }],
  },
  {
    keyMenue: "បច្ចេកទេស",
    item: [{ link: "technical.html" }],
  },
  {
    keyMenue: "ការណែនាំ",
    item: [{ link: "introduction.html" }],
  },
  {
    keyMenue: "ដើមទុន",
    item: [{ link: "index.html" }],
  },
];

var getMenue = "";
for (let i in menue) {
  var getLink = "";
  for (let l of menue[i]["item"]) {
    getLink += l["link"];
  }
  getMenue += `<a class="navbar-brand" href="${getLink}">${menue[i]["keyMenue"]}</a>`;
}
document.getElementById("displayMenue").innerHTML = getMenue;

const dropMenue = [
  {
    keyDrop: "តើពួកយើងជានណា?",
    dItem: [{ keyitem: "aboutUs.html" }],
  },
  {
    keyDrop: "គោលដៅ",
    dItem: [{ keyitem: "gold.html" }],
  },
  {
    keyDrop: "ចខុវិស័យ",
    dItem: [{ keyitem: "wesee.html" }],
  },
];
var getdrop = "";
for (let i in dropMenue) {
  var getAboutlink = "";
  for (let l of dropMenue[i]["dItem"]) {
    getAboutlink += l["keyitem"];
  }
  getdrop += ` <a href="${getAboutlink}" class="navbar">${dropMenue[i]["keyDrop"]}</a>`;
}
document.getElementById("disdropmenue").innerHTML = getdrop;

document.getElementById("hover").addEventListener("mouseover", () => {
  document.getElementsByClassName("dropdown-menue")[0].style.height = "150px";
});

document.getElementById("hover").addEventListener("mouseleave", () => {
  document.getElementsByClassName("dropdown-menue")[0].style.height = "0px";
});

// form control

document.getElementById("btnLoign").addEventListener("click",()=>{
    document.getElementById('mainForm').style.display='contents';
    document.getElementById('mainLogin').style.display='grid';
    document.getElementById('mainSignUp').style.display='none';
})
document.getElementById('closeFormLogin').addEventListener('click',()=>{
  document.getElementById('mainForm').style.display='none';
});
document.getElementById("btnSignUp").addEventListener("click",()=>{
  document.getElementById('mainForm').style.display='contents';
  document.getElementById('mainSignUp').style.display='grid';
  document.getElementById('mainLogin').style.display='none';
})
var logo = `logo.jfif`;


document.getElementById("logoForm").innerHTML = `<img src="${logo}" alt="${logo}" />`

const thumnail = "បង្កើតគណនីជាមួយ​គេហទំព័ររបស់ពួកយើងលោកអ្នកអាចទទួលបាចំនេះដឹងទាក់ទងនឹងកសិកម្មមិនតែប៉ណ្នោះ​លោកអ្នកអាចចែករំលែកចំណេះដឹងទាក់ទងនឹងកសិកម្មទៀតផង៕";
document.getElementById("thumnail").innerHTML = `<h3>សូមស្វាគមន៍</h3> <h5>${thumnail}</h5>`;

const icon = [
  {
    keyicon : `<i class="fa-brands fa-facebook"></i>`
  },
  {
    keyicon : `<i class="fa-brands fa-google"></i>`
  },
  {
    keyicon : `<i class="fa-brands fa-twitter"></i>`
  }
];


var stallIcon = "";
for( let i in icon) {
  stallIcon += icon[i]['keyicon'];
}
 
document.getElementById("geticon").innerHTML = stallIcon;
document.getElementById("geticonLogin").innerHTML = stallIcon;
document.getElementById("forgetpassworld").addEventListener('click',()=>{
  alert("Sorry This website has no backned 😕");
});
document.getElementById("gotoSignUp").addEventListener('click',()=>{
  document.getElementById('mainSignUp').style.display='grid';
  document.getElementById('mainLogin').style.display='none';
})

document.getElementById("Login").addEventListener('click',()=>{
  document.getElementById('mainSignUp').style.display='none';
  document.getElementById('mainLogin').style.display='grid';
});
document.getElementById('closeForm').addEventListener('click',()=>{
  document.getElementById('mainForm').style.display='none';  
})

  //user and search;
document.getElementById("user").addEventListener("click",()=>{
  
})

document.getElementById("search").addEventListener("click",()=>{
  document.getElementById('searchBar').style.width='500px'; 
});

document.getElementById("searchBar").addEventListener("mouseleave",()=>{
  document.getElementById('searchBar').style.width='0px';
});
const imageicon = [
  {
    keyimagesicon : "facebook.jpg",keylink:[{subkey:"https://www.facebook.com/bizcambo"}]
  },
  {
    keyimagesicon : "twitter.png",keylink:[{subkey:"https://twitter.com/home"}]

  },
  {
    keyimagesicon : "youtube.png",keylink:[{subkey:"https://www.youtube.com/@BusinessCambodiabc"}]
  },
];

var getImagesLink = ' ';

for( let i in imageicon ){
  var stalllink = '';
  for( let link of imageicon[i]['keylink']){
   stalllink += link['subkey'];
  }
  getImagesLink += `<a href="${stalllink}"><img src="${imageicon[i]['keyimagesicon']}" alt=""></a>`;
}
document.getElementById('imageIcon').innerHTML = getImagesLink;


const video = [
  {
    keyvideo : "vod1.mp4",
    keycaption : "ដាំបន្លែចិញ្ចឹមសត្វជុំវិញផ្ទះ ចំណូលជិត១០០$/ថ្ងៃ | កម្មវិធីកសិកម្ម",
    keyname : "Business Cambodia",
    keyviews : "ចំនួននាក់មើល:100ពាន់ .មួយថ្ងៃមុន",
    keyid : "vdo0"
  },
  {
    keyvideo : "Top CEO.mp4",
    keycaption : "ពីដូនតាមក គេចិញ្ចឹមជ្រូកក្នុងទ្រុង តែគាត់វិញប្រលែងឲ្យស៊ីស្មៅក្នុងរបងឆក់ | កម្មវិធី Top CEO",
    keyname : "Business Cambodia",
    keyviews : "ចំនួននាក់មើល:500ពាន់ .1សប្តាហ៍មុន",
    keyid : "vdo1"
  },
  {
    keyvideo : "កម្មវិធីកសិកម្ម.mp4",
    keycaption : "ដីកន្លះហិកតាធ្វើស្រែមិនគ្រប់ហូប ច្នៃតែបន្ដិចសល់លុយខ្ទង់ពាន់$ | កម្មវិធីកសិកម្ម",
    keyname : "Business Cambodia",
    keyviews : "ចំនួននាក់មើល​​ 350 ពាន់ .មួយថ្ងៃមុន",
    keyid : "vdo2"
  },
  {
    keyvideo : "កម្មវិធីក្ដីស្រមៃខ្ញុំ.mp4",
    keycaption : "ធ្វើការឲ្យគេយកជំនាញ មករកស៊ីខ្លួនឯង គួរធ្វើបែបណា? | កម្មវិធីក្ដីស្រមៃខ្ញុំ",
    keyname : "Business Cambodia",
    keyviews : "ចំនួននាក់មើល​ 28ពាន់ .2សប្តាហ៍មុន",
    keyid : "vdo3"
  },
  {
    keyvideo : "យុវជនម្នាក់នេះបោះបង់ប្រាក់ខែខ្ទង់ពាន់ $ មកចិញ្ចឹមបង្កងអូស្រ្តាលីឥទ្បូវបានផលហើយ.mp4",
    keycaption : "យុវជនម្នាក់នេះបោះបង់ប្រាក់ខែខ្ទង់ពាន់ $ មកចិញ្ចឹមបង្កងអូស្រ្តាលីឥទ្បូវបានផលហើយ",
    keyname : "Business Cambodia",
    keyviews : "ចំនួននាក់មើល:300ពាន់ .មួយថ្ងៃមុន",
    keyid : "vdo4"
  }
];
var getAllElementOfVideo = '';
for(let item of video) {
  getAllElementOfVideo += `
    <div class="container-fluid main-vod-and-caption p-0">
      <div class="control-vdo" id="controlVdo">
        <video id="${item.keyid}" src="${item.keyvideo}"></video>
      </div>
      <div class="caption-vdo">
        <h5>${item.keycaption}</h5>
        <p>${item.keyname}</p>
        <p>${item.keyviews}</p>
      </div>
    </div>
  `;
}

document.getElementsByClassName('catecary-vod')[0].innerHTML = getAllElementOfVideo;

const list = [...new Set(video.map((item)=>{
  return item;
}))]
document.getElementById('vdo0').addEventListener('click',()=>{
  const filterdata = list.filter((item)=>{
    return item.keyid.toLowerCase().includes("vdo0");
  })
  displayItem1(filterdata);
});
const displayItem1 =  ((item)=>{
  document.getElementsByClassName('display-vdo')[0].innerHTML = item.map((item)=>{
    const {keyvideo} = item;  
    return (`<video controls src="${keyvideo}"></video>`)
  })
  document.getElementsByClassName('header-caption')[0].innerHTML = item.map((item)=>{
    const {keycaption} = item;  
    return (`
            <h5>
                ${keycaption}
            </h5>
    `);
  });
});

document.getElementById('vdo1').addEventListener('click',()=>{
  const filterdata = list.filter((item)=>{
    return item.keyid.toLowerCase().includes("vdo1");
  })
  displayItem2(filterdata);
});

const displayItem2 =  ((item)=>{
  document.getElementsByClassName('display-vdo')[0].innerHTML = item.map((item)=>{
    const {keyvideo} = item;  
    return (`<video controls src="${keyvideo}"></video>`)
  })
  document.getElementsByClassName('header-caption')[0].innerHTML = item.map((item)=>{
    const {keycaption} = item;  
    return (`
            <h5>
                ${keycaption}
            </h5>
    `);
  });
});

document.getElementById('vdo2').addEventListener('click',()=>{
  const filterdata = list.filter((item)=>{
    return item.keyid.toLowerCase().includes("vdo2");
  })
  displayItem3(filterdata);
});

const displayItem3 =  ((item)=>{
  document.getElementsByClassName('display-vdo')[0].innerHTML = item.map((item)=>{
    const {keyvideo} = item;  
    return (`<video controls src="${keyvideo}"></video>`)
  })
  document.getElementsByClassName('header-caption')[0].innerHTML = item.map((item)=>{
    const {keycaption} = item;  
    return (`
            <h5>
                ${keycaption}
            </h5>
    `);
  });
});

document.getElementById('vdo3').addEventListener('click',()=>{
  const filterdata = list.filter((item)=>{
    return item.keyid.toLowerCase().includes("vdo3");
  })
  displayItem4(filterdata);
});

const displayItem4 =  ((item)=>{
  document.getElementsByClassName('display-vdo')[0].innerHTML = item.map((item)=>{
    const {keyvideo} = item;  
    return (`<video controls src="${keyvideo}"></video>`)
  })
  document.getElementsByClassName('header-caption')[0].innerHTML = item.map((item)=>{
    const {keycaption} = item;  
    return (`
            <h5>
                ${keycaption}
            </h5>
    `);
  });
});

document.getElementById('vdo4').addEventListener('click',()=>{
  const filterdata = list.filter((item)=>{
    return item.keyid.toLowerCase().includes("vdo4");
  })
  displayItem5(filterdata);
});

const displayItem5 =  ((item)=>{
  document.getElementsByClassName('display-vdo')[0].innerHTML = item.map((item)=>{
    const {keyvideo} = item;  
    return (`<video controls src="${keyvideo}"></video>`)
  })
  document.getElementsByClassName('header-caption')[0].innerHTML = item.map((item)=>{
    const {keycaption} = item;  
    return (`
            <h5>
                ${keycaption}
            </h5>
    `);
  });
});

const contentvideo = [
  {
     video : "video1.mp4",
     title : "បើមានដីតូចគួរធ្វើបែបនេះ សល់ស្រូវហូបហើយ បានត្រីលក់ទៀត | កម្មវីធីកសិកម្ម",
     porofile : "bsettha.jpg",
     _name : "khom setha",
     date : "10 កុម្ភ ២០២៣",
     vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video2.mp4",
    title : "ដីស្រែ២៥ហិកតាក្នុងភូមិមួយនៅឥណ្ឌូនេស៊ី ត្រូវបានច្នៃចិញ្ចឹមត្រីក្នុងស្រែ | កម្មវិធីកសិកម្ម",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "7 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video3.mp4",
    title : "បើដាក់ចិញ្ចឹមត្រីក្នុងស្រែ តើប្រមូលផលស្រូវនិងត្រីយ៉ាងម៉េច? | កម្មវិធីកសិកម្ម",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "8 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video4.mp4",
    title : "ជួលដីអ្នកភូមិដាក់ចិញ្ចឹមត្រីក្នុងស្រែ ជួយកសិករចំណូលកើនទ្វេ | កម្មវិធីកសិកម្ម",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "12 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video5.mp4",
    title : "ខ្វះដីតែមិនខ្វះគំនិត! ឥណ្ឌាច្នៃកំប្លោកធ្វើក្បូនដាំបន្លែបណ្ដែតទឹក | កម្មវិធីកសិកម្ម",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "30 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video6.mp4",
    title : "ធ្លាប់តែឃើញអ្នកជនបទធ្វើកសិកម្មឥទ្បូវអ្នកក្រុងក៏ចាប់ផ្តើមដាំដុះដែរ",
    porofile : "Images/bsettha.jpg",
    _name : "khom setha",
    date : "22 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video77.mp4",
    title : "អស្ចារ្យណាស់ កូនខ្មែរច្នៃកាកសំណល់សម្រាប ធ្វើជីធម្មជាតិមួយថ្ងៃ១៥តោន | កម្មវិធីក្ដីស្រមៃខ្ញុំ",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "24 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "vedio8.mp4",
    title : "ស្ថានីយ៍ចិញ្ចឹមពូជត្រីធំមួយរបស់កម្ពុជា ដែលមានទំហំ៧៥ហិកតា មួយឆ្នាំអាចផ្គត់ផ្គង់ត្រីបាន៤ពាន់តោន",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "25 កក្កដា​ ២០២៣",
    vue : "ចំនួបអ្នកមើល 100k"
  },
  {
    video : "video9.mp4",
    title : "ហេតុអ្វីវៀតណាម ហ៊ានដាក់ចិញ្ចឹមក្ដាមក្នុងស្រែ? | កម្មវិធីកសិកម្ម",
    porofile : "bsettha.jpg",
    _name : "khom setha",
    date : "៣០ សីហា​ ២០២២",
    vue : "ចំនួបអ្នកមើល 100k"
  },
]
 var getcontent = ' ';
for( let i of contentvideo ) {
    getcontent += `
      <div id="idhover" class="card-content">
        <div class="image-video">
           <video controls src="${i.video}"></video>
        </div>
        <div class="under-thumbnail">
          <h5 class="under-caption">
            ${i.title}
          </h5>
          <div class="admind">
            <img src="${i.porofile}" alt="">
            <div class="about">
              <p>${i._name}</p>
              <p>${i.date}</p>
              <p>${i.vue}</p>
            </div>
          </div>
        </div>
      </div>`;
}
document.getElementsByClassName('mian-contenct-under-vdo')[0].innerHTML = getcontent;
    // good food code block
var lastcaption = "ចូលរួមជាមួយសហគម៍របស់ពួកយើងលោកអ្នកអាចទទួលបានអត្ថប្រយោជន៍ជាច្រើនដូចជាទទួលបានព័័ត័មានថ្មីៗទាក់ទងនិងកសិសកម្ម បច្ចេកទេសថ្មី ការទិញនិងការល់ផលិតផលកសិសកម្ម។";
var imageTechnical = "Images/drone_green.jpg";
var goodFoodHeadertxt = "ដំណាំគ្មានជាតិគីមី​ និង ​អាហាសុខភាព";
var goodFoodcation = "អាហារគ្មានសារធាតុគីមីដែលប៉ះប៉ាល់ដល់សុខភាព​​ជាអាហារដែលយើងទទួលទានដោយទំនុកចិត្តគ្មានសារធាតុប៉ះបាល់ដល់រាងកាយរបស់អ្នក"; 
document.getElementById('goodFoodHeader').innerHTML = goodFoodHeadertxt;
document.getElementById('textUnderHeader').innerHTML = goodFoodcation;


var dronInforMation = "Dorn បាញ់ថ្នាំដោយស្វ័យប្រវត្តិរបស់ពួកយើងជាច្ចេកវិទ្យាថ្មីដែលបង្កើតឡើងសម្រាប់ជួយសម្រាលការងាររបស់បងប្អូនកសិករយើង​មានភាពងាយស្រួលកដល់ការបាញ់ថ្នាំសម្លាប់ស្មៅចំណាលពេលតិចនិងកម្លាំងតិចបាញ់បានសព្វល្អចំណាលថ្នាំ។មិនតែប៉ុណ្ណោះវាងាយស្រួលដល់ការថែទាំដំណាំរបស់បងប្អូនដូចជាការបាចជីការបាញ់ថ្នាំស្មៅបាញ់ថ្នាំពៅថ្នាំសម្លាប់សត្វល្អិតជាដើម។";
document.getElementsByClassName('cpation-text')[0].innerHTML = `<p>${dronInforMation}</p>`;
document.getElementsByClassName("technical-image-box");
document.getElementsByClassName("last-caption")[0].innerHTML = lastcaption;

const abouttext = "វេទិកាស្នូលកសិកម្មខ្មែរ";
document.getElementsByClassName("about-header-txt")[0].innerHTML =  `<i class="fa-brands fa-pagelines"></i>${abouttext}<i class="fa-brands fa-pagelines"></i>`;

var aboutBigtext = "អ្វីដែលយើងផ្តល់ជូនសម្រាប់វេទិកាកសិកម្មឌីជីថលកាន់តែប្រសើររបស់អ្នក";
document.getElementsByClassName("about-big-text")[0].innerHTML = aboutBigtext; 

var smallImageIcon = [
  {
    'keyiconimage2' : "cowcolor.png",
    keycp:[
      {
          subkeycp : "ការចិញ្ចឹមសត្វ"
      }
    ]
  },
  {
    'keyiconimage2' : "rice.png",
    keycp:[
      {
          subkeycp : "ដំណាំ"
      }
    ]
  },
  {
    'keyiconimage2' : "save-nature.png",
    keycp:[
      {
          subkeycp : "ការថែរក្សាដើមឈើ"
      }
    ]
  },
  {
    'keyiconimage2' : "fish.png",
    keycp:[
      {
          subkeycp : "ការនេសាទ"
      }
    ]
  },
  {
    'keyiconimage2' : "healthy-food.png",
    keycp:[
      {
          subkeycp : "បន្លែនិងផ្លែឈើ"
      }
    ]
  },
  {
    'keyiconimage2' : "planet-earth.png",
    keycp:[
      {
          subkeycp : "ការថែរក្សាបរិស្ថាន"
      }
    ]
  }
];

var stallsmallImnageIcon = "";
for(let i in smallImageIcon) {
  var getcp = "";
  for(let j of smallImageIcon[i]['keycp']){
       getcp += j['subkeycp'];
  }
  stallsmallImnageIcon += `
  <div class="about-smal-box">
  <a href=""><img src="${smallImageIcon[i]['keyiconimage2']}" alt=""></a>
  <p>${getcp}</p> 
  </div>`;
  
}

document.getElementsByClassName("main-small-box")[0].innerHTML =  stallsmallImnageIcon;


const imageOwnAPI = [
  {
    keyimage : "whiteco.jpg"
  },
  {
    keyimage : "goat.jpg"
  },
  {
    keyimage : "amenandhiswhifwe.png"
  },
  {
    keyimage : "twowomeninthefield.jpg"
  },
  {
    keyimage : "manProtechhis.jpg"
  },
  {
    keyimage : "hq720.jpg"
  },
  {
    keyimage : "speyter.jpg"
  },
  {
    keyimage : "MyFir.jpg"
  },
  {
    keyimage : "checken.webp"
  },
  {
    keyimage : "Fishes-in-Tonle-Sap-Lake.jpg"
  },
  {
    keyimage : "rice-field-siem-reap-fun.jpg"
  },
  {
    keyimage : "nitrogen-chemical-fertilizer-bg.jpg"
  },
  {
    keyimage : "XAG_Agricultural_Drone.jpg"
  }
];
 var getImageOwnAPI = "";
for( let i in imageOwnAPI) {
   getImageOwnAPI += `<div class="scrol-child-box"><img src="${imageOwnAPI[i]['keyimage']}" alt=""></div>`;  
}

document.getElementsByClassName("main-scroll")[0].innerHTML = getImageOwnAPI;


const urlLocation = "https://www.google.com/maps/place/11.545711,104.892611/data=!4m6!3m5!1s0!7e2!8m2!3d11.545710999999999!4d104.89261119999999?utm_source=mstt_1&entry=gps&lucs=47068615,,47065935&coh=176815&g_ep=CAESCTExLjg3LjMwNBgAINeCAyoSNDcwNjg2MTUsLDQ3MDY1OTM1QgJLSA%3D%3D";
document.getElementsByClassName("location-Main")[0].innerHTML = `<a href="${urlLocation}">Location</a>`

document.getElementsByClassName("logo-box")[0].innerHTML = `<img src="${logo}" alt="${logo}" />`;

