function newSelectedText(){
    let sTxt, msg, index, newDef,oldDef, sObj, _newObj = {},mp3src='https://cdn.pixabay.com/download/audio/2021/12/03/audio_19b9dafe07.mp3?';
    sTxt = window.getSelection().toString().trim();
    sObj = JSON.parse(window.localStorage.getItem('@ri5: neuWorte'));
        if (sObj) {
            for (i in sObj) {
                if (sTxt == sObj[i].kelime) {
                    index = i;
                    break;
                };
            };
        };
    if (typeof index == 'undefined') {
        _newObj.kelime = sTxt;
        newDef = prompt(`✅ "${sTxt}" kelimesi listeye eklenecek.`,'Kelimeyi tanimla...');
        _newObj.tanim = newDef;_newObj.date=new Date();
        if (!sObj) sObj = [];
        sObj.push(_newObj);
    } else {
        oldDef=sObj[index].tanim;
        newDef = prompt(`⚠️ ${sTxt} kelimesi listede mevcut.`,oldDef );
        sObj[index].tanim = newDef;sObj[index].date=new Date();
    };
    if (!!newDef && newDef != oldDef){
        window.localStorage.setItem('@ri5: neuWorte', JSON.stringify(sObj));
        new Audio(mp3src).play();
    };
    }
    window.newSelectedText=newSelectedText
    newSelectedText()
