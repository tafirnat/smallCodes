function newSelectedText(){
    let sTxt, temp, newDef, oldDef ,sObj , key, keys, valueObj={}, ad="@ri5: neuWorte", mp3='https://cdn.pixabay.com/download/audio/2021/12/03/audio_19b9dafe07.mp3?';
    sTxt = window.getSelection().toString().trim();
    sObj = JSON.parse(window.localStorage.getItem(ad));
    temp='💭 Kelimeyi tanimla...';
    if(!sTxt)return
    try {
        valueObj=sObj.value
        if(!sObj.value[sTxt]) throw `notFound`
        key = Object.keys(sObj.value[sTxt])[0]
        oldDef = sObj.value[sTxt][key]
        oldDef= !!oldDef?oldDef:temp;
        newDef = prompt(`⚠️ ${sTxt} kelimesi listede mevcut.`,oldDef );
        delete sObj.value[sTxt][key] 
        }
    catch (e) {newDef = prompt(`✅ "${sTxt}" kelimesi listeye eklenecek.`,temp)}
        
    if(newDef==null || oldDef == newDef) return 
    newDef = newDef == temp || !newDef.trim() ? undefined : newDef;
        key=(new Date()).toLocaleString().replaceAll(' ','_');
        valueObj[sTxt]={};
        valueObj[sTxt][key]= !!newDef?newDef:false;
        window.localStorage.setItem(ad, JSON.stringify({name:ad ,date:new Date().toJSON(),value:valueObj}));
        new Audio(mp3).play();
    };
    window.newSelectedText=newSelectedText
    newSelectedText()
