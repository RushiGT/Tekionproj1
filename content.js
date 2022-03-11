(function ()
{
    let KOP = 
        {   RestName : "Kitchens of Punjab",
            Speciality : "Punjabi, North Indian",
            Address : "Bilekahalli, BTM - Bangalore",
            Ratings : 4.2 , 
            UsersRat : "100+ Ratings",
            DeliveryTime : '--',
            Exclusive : {
                            Price : 500 ,
                            People : "Cost for two"
                        } ,
            Offers : [
                        {   
                            offer : "60% off up to ₹120",
                            code : "Use code TRYNEW"
                         }, 
                        {
                            offer : "25% off",
                            code : "Use code PARTY"   
                        }
                    ],
            Menu: [
                {
                    sectionId: "recommended",
                    sectionName: "Recommended",
                    sectionContent: [
                        {
                            itemId: "vegPlatter",
                            itemName: "Veg Platter",
                            itemPrice: 120,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        },
                        {
                            itemId: "vegPlatter2",
                            itemName: "Veg Platter2",
                            itemPrice: 130,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: " Non Veg"

                        },
                        {
                            itemId: "vegPlatter11",
                            itemName: "Veg Platter11",
                            itemPrice: 134,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: " Non Veg"

                        },
                        {
                            itemId: "vegPlatter3",
                            itemName: "Veg Platter3",
                            itemPrice: 140,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        },
                        {
                            itemId: "vegPlatter12",
                            itemName: "Veg Platter12",
                            itemPrice: 139,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: " Non Veg"

                        },

                    ]
                },

                {
                    sectionId: "platters",
                    sectionName: "Platters",
                    sectionContent: [
                        {
                            itemId: "vegPlatter4",
                            itemName: "Veg Platter4",
                            itemPrice: 120,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        },
                        {
                            itemId: "vegPlatter5",
                            itemName: "Veg Platter5",
                            itemPrice: 130,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: " Non Veg"

                        },
                        {
                            itemId: "vegPlatter6",
                            itemName: "Veg Platter6",
                            itemPrice: 140,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        }

                    ]
                },
                {
                    sectionId: "familyPack",
                    sectionName: "Family Pack",
                    sectionContent: [
                        {
                            itemId: "vegPlatter7",
                            itemName: "Veg Platter7",
                            itemPrice: 120,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        },
                        {
                            itemId: "vegPlatter8",
                            itemName: "Veg Platter8",
                            itemPrice: 130,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: " Non Veg"

                        },
                        {
                            itemId: "vegPlatter9",
                            itemName: "Veg Platter9",
                            itemPrice: 140,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        },
                        {
                            itemId: "vegPlatter10",
                            itemName: "Veg Platter10",
                            itemPrice: 140,
                            itemImage: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                            itemInfo: "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                            itemType: "Veg"

                        }


                    ]
                }
            ]
        };
        
function createHtmlheader(KOP)
{
   let Board = document.getElementsByClassName('board')[0];
   let restau = document.createElement('div');
   restau = updateHtmlElement(restau,{className:'restau',textContent : KOP.RestName});
   let speciality = document.createElement('div');
   speciality = updateHtmlElement(speciality, {className:'speciality' ,textContent:KOP.Speciality});
   let address = document.createElement('div');
   address = updateHtmlElement(address,{className:'address',textContent :KOP.Address});
   Board = appendChild2(Board,[restau,speciality,address]);
   let ratings1 = document.getElementsByClassName('rat1')[0];
   let rat1 = document.createElement('span');
   let rat2 = document.createElement('span');
   rat2.className = "icon-star";
   ratings1.appendChild(rat2);
   rat1.textContent = KOP.Ratings;
   ratings1.appendChild(rat1);
   let ratings2 = document.getElementsByClassName('rat2')[0];
    let rat3 = document.createElement('span');
    rat3.textContent = KOP.UsersRat;
    ratings2.appendChild(rat3);
    ratings1 = document.getElementsByClassName('rat1')[1];
     rat1 = document.createElement('span');
    rat1.textContent = KOP.DeliveryTime + " mins";
    ratings1.appendChild(rat1);
    ratings1 = document.getElementsByClassName('rat1')[2];
    rat1 = document.createElement('span');
   rat1.textContent = "₹ "+ KOP.Exclusive.Price ;
   ratings1.appendChild(rat1);
   ratings2 = document.getElementsByClassName('rat2')[2];
   rat1 = document.createElement('span');
   rat1.textContent = KOP.Exclusive.People ;
   ratings2.appendChild(rat1);

};

function createHtmlSections(menu) {

    let htmlSectionList = document.getElementById('varieties');
    for (let section of menu) {
        let sectionElement0 = document.createElement('li');
        let sectionElement = document.createElement('a');
        sectionElement = updateHtmlElement(sectionElement, {className :"ListSection", iD : section.sectionId, href: "#"+section.sectionId+ "cursor", textContent: section.sectionName});
        if(menu[0]===section)
        {
             sectionElement0.className= "activate";
        }
        sectionElement0.id =section.sectionId+ "cursor1";
        sectionElement0.appendChild(sectionElement);
        htmlSectionList.appendChild(sectionElement0);
        createHtmlItemMenu(section);

    }
};

function createHtmlItemMenu(section) {
    let itemList = document.createElement('div'); // Section wise ItemList  
    itemList = updateHtmlElement(itemList, {className:'menufull', iD : section.sectionId + "cursor"});
    let sectionNAME = document.createElement('div');
    sectionNAME = updateHtmlElement(sectionNAME, {className:'sectionfull', iD : section.sectionId + "Menu", textContent: section.sectionName});
    let sectionSize = document.createElement('div');
    sectionSize = updateHtmlElement(sectionSize, {className : 'sizefull', iD : section.sectionId + "Size" ,textContent: section.sectionContent.length + " items"});
    itemList = appendChild2(itemList, [sectionNAME, sectionSize]);
    for (let item of section.sectionContent) {
        let Item = document.createElement('div');
        Item = updateHtmlElement(Item,{ className : 'itemFull', iD : item.itemId});
        let itemMenu = document.createElement('div');
        let itemimage = document.createElement('div');
        itemMenu = updateHtmlElement(itemMenu, { iD : item.itemId + "menu"});
        itemimage = updateHtmlElement(itemimage, {iD : item.itemId + "image"});
        let itemtype = document.createElement('div');
        itemtype = updateHtmlElement(itemtype, { className : item.itemType, textContent: item.itemType});
        let itemname = document.createElement('div');
        itemname = updateHtmlElement(itemname, {className : 'itemvalue', textContent : item.itemName});
        let iteminfo = document.createElement('div');
        iteminfo = updateHtmlElement(iteminfo, {className : 'iteminfo', textContent: item.itemInfo});
        let image = document.createElement('img');
        image = updateHtmlElement(image, {className : 'itemimage', src : item.itemImage});
        let addbtn = document.createElement('button');
        addbtn= updateHtmlElement(addbtn, { className:'addbutton',textContent : "ADD"});
        let price = document.createElement('div');
        price = updateHtmlElement(price, {className : 'itemprice',textContent: item.itemPrice});
        itemMenu = appendChild2(itemMenu, [itemtype, itemname, price, iteminfo]);
        itemimage=appendChild2(itemimage,[image,addbtn]);
        Item = appendChild2(Item, [itemMenu, itemimage]);
        itemList.appendChild(Item);
    }
    let itemhtmllist = document.getElementById('menuim');
    itemhtmllist.appendChild(itemList);

};

/////
function updateHtmlElement(element, {className , iD, href, src, textContent}) {
    if (className) {
        element.className = className;
    }
    if (iD) {
        element.id = iD;
    }
    if (href) {
        element.href = href;
    }
    if (src) {
        element.src = src;
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
};

///////
let appendChild2 = function (parent, children) {
    for (let child of children) {
        parent.appendChild(child);
    }
    return parent;
};

/*function sectionScroll()
{
    const link = document.querySelectorAll('.ListSection');
   
    link.forEach((item)=>{
       
        item.addEventListener("click", ()=> 
        {
                let element = document.getElementById(item.getAttribute('id') + "cursor");
                element.scrollIntoView({
                    behavior : "smooth",
                });
        }
        )

    });
} 
*/
function highlighter()
{

const menus = document.querySelectorAll(".menufull");
window.addEventListener("scroll", () => {
   menus.forEach((menu)=>{
       let position = menu.getBoundingClientRect();
       
       let section = document.getElementById(menu.id + '1');
       //console.log(section);
    
       if(position.top<=400 && position.top>=400-position.height) {
		section.classList.add('activate');
	    }
        else 
        {
           section.classList.remove('activate');
        }
   })
});
} 
function getPropertiesOfItem (btn)
{
   let itemElmnt = btn.parentElement.parentElement;
    let itemInfoElmnt = itemElmnt.firstChild;
    let itemPropertiesHtml = itemInfoElmnt.childNodes;
    let properties = {};
    properties.type = itemPropertiesHtml[0].innerHTML;
    properties.itemName = itemPropertiesHtml[1].innerHTML;
    properties.itemPrice = +itemPropertiesHtml[2].innerHTML;
    properties.itemQuantity = 1;
    return properties;

}
function updateAddbtn(btn,idName)
{
   let parent = btn.parentElement;
    btn.style.display = 'none';
   let minus = document.createElement('button');
   let quantity = document.createElement('button');
   let plus = document.createElement('button');
   minus = updateHtmlElement(minus,{className : "quantButton minus "+ idName + "minus",textContent : '-'});
   quantity = updateHtmlElement(quantity,{className : "quantButton quantity "+ idName + "quantity", textContent : '1'}); 
   plus = updateHtmlElement(plus,{className : "quantButton plus "+ idName + "plus",textContent : '+'});
   parent = appendChild2(parent , [minus,quantity,plus]);
}
function updateCart(btn,properties)
{
    let filler0 = document.getElementById('filler0');
    if(filler0.style.display !== 'none')
    {
        filler0.style.display = 'none';
    }
    let filler = document.getElementsByClassName('filler')[0];
    let filler1 = document.getElementById('filler1');
    if(!filler1)
    {
        filler1 = document.createElement('div');
        filler1.id = 'filler1';
    }

    
    let cartitem = document.createElement('div');
    cartitem.className = "cartitem";
    cartitem.id = properties.itemName.replace(/ /g,'') + 'cart';
    let cartItemName = document.createElement('span');
    cartItemName.textContent = properties.itemName;
    cartItemName.className = 'cartItemName';
    let cartItemtype = document.createElement('span');
    cartItemtype.textContent = properties.type;
    cartItemtype.className= 'cartItemType';
    let cartItemPrice = document.createElement('span');
    cartItemPrice.textContent = properties.itemPrice;
    cartItemPrice.className = 'cartItemPrice';
    let minus = document.createElement('button');
   let quantity = document.createElement('button');
   let plus = document.createElement('button');
   minus = updateHtmlElement(minus,{ className : "quantButton minus",textContent : '-'} );
   quantity = updateHtmlElement(quantity,{ className : "quantButton quantity", textContent : '1'}); 
   plus = updateHtmlElement(plus,{className: "quantButton plus",textContent : '+'});
    cartitem = appendChild2(cartitem,[cartItemtype,cartItemName,cartItemPrice,minus,quantity,plus]);
   filler1.appendChild(cartitem);
    filler.appendChild(filler1);
}
function updateTotalAmount()
{
    let filler = document.getElementsByClassName('filler')[0];
    let cartTotal = document.getElementById('cartTotal');
    if(!cartTotal)
    {
    cartTotal = document.createElement('div');
    cartTotal.id = 'cartTotal';
    }
    total = 0;
    for (let [key, value] of Object.entries(Cart))
     {
        total = total + (value.itemQuantity * value.itemPrice);
     }
     cartTotal.textContent = "$" + total;
    filler.appendChild(cartTotal);
     
}
Cart = {}; 
function addButtonImplementation()
{
    let addbtns = document.querySelectorAll('.addbutton');
    addbtns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
           let properties= getPropertiesOfItem(btn);
            let itemCartname = properties.itemName.replace(/ /g,'');
            Cart[itemCartname] = properties ; 
            updateAddbtn(btn,itemCartname);
            updateCart(btn,properties);
            updateTotalAmount();
            minusButtonImplementation();
            plusButtonImplmenetation();
        })

    });
}
function RemoveBtn(addbtn,itemName)
{
    document.getElementsByClassName(itemName+'minus')[0].remove();
    document.getElementsByClassName(itemName+'quantity')[0].remove();
    document.getElementsByClassName(itemName+'plus')[0].remove();
    addbtn.style.removeProperty('display');
}

function minusButtonImplementation()
{
    let minus = document.querySelectorAll('.minus');
    minus.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let button2 = btn;
            let button1 = btn;
             if(btn.classList.length >= 3 )
             {
                let cartid=  btn.classList[2].slice(0,-5);
                console.log("cartid" , cartid);
                button2 = document.getElementById(cartid+'cart').childNodes[3];
                console.log(button2);
                button1 = btn;
             }
           
            let itemName = button2.parentElement.id.slice(0,-4); 
            

            let properties = Cart[itemName];
            
           properties.itemQuantity = properties.itemQuantity - 1 ;
           let itemCart = button2.parentElement;
           let itemCartQuantity = button2.parentElement.childNodes[4];

            if(button1===button2)
            {
                button1 = document.getElementsByClassName(itemName+'minus')[0];

            }
            let cartTotal = document.getElementById('cartTotal');
            cartTotal.textContent = '$' + (+cartTotal.textContent.slice(1) - properties.itemPrice); 

           if(properties.itemQuantity===0)
            {
                itemCart.remove();
                delete Cart[itemName];
                RemoveBtn(button1.parentElement.childNodes[1],itemName);
            }
            else 
            {
                let menuItemQuantity = document.getElementsByClassName(itemName+'quantity')[0];
                menuItemQuantity.textContent = properties.itemQuantity;
                itemCartQuantity.textContent = properties.itemQuantity;
            }

            if(Object.keys(Cart).length === 0)
            {   
               
                cartTotal.remove();
                let fillerEmpty = document.getElementById('filler0');
                fillerEmpty.style.removeProperty('display');

            }
            
        });

    });
}
function plusButtonImplmenetation()
{
    let plus = document.querySelectorAll('.plus');
    plus.forEach((btn)=>{

            btn.addEventListener('click',()=>{
            let button2 = btn;
            let button1 = btn;
             if(btn.classList.length >= 3 )
             {
                let cartid=  btn.classList[2].slice(0,-5);
                button2 = document.getElementById(cartid+'cart').childNodes[5];
             }
           
            let itemName = button2.parentElement.id.slice(0,-4);
            
            let properties = Cart[itemName];
            
           properties.itemQuantity = properties.itemQuantity + 1 ;
           

           let itemCart = button2.parentElement;
           let itemCartQuantity = button2.parentElement.childNodes[4];

            if(button1===button2)
            {
                button1 = document.getElementsByClassName(itemName+'plus')[0];

            }
            let cartTotal = document.getElementById('cartTotal');
            cartTotal.textContent = '$' + (+cartTotal.textContent.slice(1) + properties.itemPrice); 
            let menuItemQuantity = document.getElementsByClassName(itemName+'quantity')[0];
            menuItemQuantity.textContent = properties.itemQuantity;
            itemCartQuantity.textContent = properties.itemQuantity;

        });
           
    });
}

/////
createHtmlheader(KOP);
createHtmlSections(KOP.Menu);
highlighter();
addButtonImplementation();
//sectionScroll();


})()