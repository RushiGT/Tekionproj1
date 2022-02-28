let Menu =
[
    {   sectionId : "recommended",
        sectionName : "Recommended",
        sectionContent  : [
            {   
                itemId : "vegPlatter",
                itemName :  "Veg Platter",
                itemPrice : 120,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : "Veg"

            },
            {   
                itemId : "vegPlatter2",
                itemName :  "Veg Platter2",
                itemPrice : 130,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : " Non Veg"

            },
            {   
                itemId : "vegPlatter3",
                itemName :  "Veg Platter3",
                itemPrice : 140,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : "Veg"

            }            

        ]
    },

    {   sectionId : "platters",
        sectionName : "Platters",
        sectionContent  : [
            {   
                itemId : "vegPlatter4",
                itemName :  "Veg Platter4",
                itemPrice : 120,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : "Veg"

            },
            {   
                itemId : "vegPlatter5",
                itemName :  "Veg Platter5",
                itemPrice : 130,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : " Non Veg"

            },
            {   
                itemId : "vegPlatter6",
                itemName :  "Veg Platter6",
                itemPrice : 140,
                itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
                itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
                itemType : "Veg"

            }            

        ]
    },
    {   sectionId : "familyPack",
    sectionName : "Family Pack",
    sectionContent  : [
        {   
            itemId : "vegPlatter7",
            itemName :  "Veg Platter7",
            itemPrice : 120,
            itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
            itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            itemType : "Veg"

        },
        {   
            itemId : "vegPlatter8",
            itemName :  "Veg Platter8",
            itemPrice : 130,
            itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
            itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            itemType : " Non Veg"

        },
        {   
            itemId : "vegPlatter9",
            itemName :  "Veg Platter9",
            itemPrice : 140,
            itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
            itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            itemType : "Veg"

        },
        {   
            itemId : "vegPlatter10",
            itemName :  "Veg Platter10",
            itemPrice : 140,
            itemImage : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/svwiyc9assj6qorpdji0",
            itemInfo :  "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Hara Bhara, 3 pieces of Veg Seekh and 3 pieces of Malai Chaap.",
            itemType : "Veg"

        }            


    ]
}
] 

function createHtmlSections(menu) 
{ 
    let htmlSectionList = document.getElementById('varieties');
     for( let section of menu)
     {  
        let sectionElement0 = document.createElement('li');
        let sectionElement = document.createElement('a');
        sectionElement.textContent= section.sectionName;
        sectionElement.id = section.sectionId;
        sectionElement.href="#"+ section.sectionId + "cursor";
        sectionElement.className = "ListSection"
        sectionElement0.appendChild(sectionElement);
        htmlSectionList.appendChild(sectionElement0);
        createHtmlItemMenu(section);
     }
    
};

function createHtmlItemMenu(section)
{   let itemList = document.createElement('div'); // Section wise ItemList  
        itemList.className = 'menufull';
        itemList.id =section.sectionId + "cursor";
    let sectionNAME = document.createElement('div');
    sectionNAME.textContent = section.sectionName;
    sectionNAME.id = section.sectionId + "Menu";
    sectionNAME.className = 'sectionfull';
    let sectionSize = document.createElement('div');
    sectionSize.textContent = section.sectionContent.length+ " items";
    sectionSize.id = section.sectionId + "Size";
    sectionSize.className = 'sizefull';
    itemList.appendChild(sectionNAME);
    itemList.appendChild(sectionSize);
    for(let item of section.sectionContent)
    {    let Item = document.createElement('div');
        Item.id= item.itemId;
        Item.className = 'itemFull';
        let itemMenu = document.createElement('div');
        let itemimage = document.createElement('div');
        itemMenu.id = item.itemId+"menu";
        itemimage.id = item.itemId+"image";
        let itemtype = document.createElement('div');
        itemtype.textContent = item.itemType;
        itemtype.className = item.itemType;

        let itemname= document.createElement('div');
        itemname.textContent = item.itemName;
        itemname.className = 'itemvalue';
        
        let iteminfo = document.createElement('div');
        iteminfo.textContent = item.itemInfo;
        iteminfo.className = 'iteminfo';
        let image = document.createElement('img');
        image.src=item.itemImage;
        image.className = 'itemimage'; 

        let price = document.createElement('div');
        price.textContent= item.itemPrice;
        price.className = 'itemprice'; 
        itemMenu.appendChild(itemtype);
        itemMenu.appendChild(itemname);
        itemMenu.appendChild(price);
        itemMenu.appendChild(iteminfo);
        itemimage.appendChild(image);
        Item.appendChild(itemMenu);
        Item.appendChild(itemimage);
        itemList.appendChild(Item);
    }
     let itemhtmllist = document.getElementById('menuim');
     itemhtmllist.appendChild(itemList);
    
};

createHtmlSections(Menu);
document.getElementById('varieties');
console.log()