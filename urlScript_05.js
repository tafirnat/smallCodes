function newSelectedText(){
    let sTxt, msg, index, newDef,oldDef, sObj, subKey = {},mp3src='https://cdn.pixabay.com/download/audio/2021/12/03/audio_19b9dafe07.mp3?';
    sTxt = window.getSelection().toString().trim();
    sObj = JSON.parse(window.localStorage.getItem('@ri5: neuWorte'));

    try {
        if(sObj[sTxt] == undefined) throw `notFound`
        for(subKey in sObj[sTxt]) {oldDef = sObj[sTxt][subKey]}
        newDef = prompt(`⚠️ ${sTxt} kelimesi listede mevcut.`,oldDef );
        delete sObj[sTxt][subKey] 
    } catch (error) {
         newDef = prompt(`✅ "${sTxt}" kelimesi listeye eklenecek.`,'Kelimeyi tanimla...');
        if (!sObj) sObj = {};
    }
        if(newDef==null || oldDef == newDef) return 
        subKey=(new Date()).toLocaleString().replaceAll(' ','_');
        sObj[sTxt]={};
        newDef= !!newDef?newDef:'Kelimeyi tanimla...'
        sObj[sTxt][subKey]= newDef;
        window.localStorage.setItem('@ri5: neuWorte', JSON.stringify(sObj));
        new Audio(mp3src).play();
    };
    window.newSelectedText=newSelectedText
    newSelectedText()

