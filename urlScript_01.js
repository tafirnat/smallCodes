 function newSelectedText(){
    let sTxt, msg, index, input, sObj, _newWortObj = {
        kelime: "",
        tanim: 'Kelimeye dair varsa tanimi gir...',
        date: new Date(),
    };
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
        _newWortObj.kelime = sTxt;
        input = prompt(`✅ "${sTxt}" kelimesi listeye eklenecek.`, _newWortObj.tanim);
        _newWortObj.tanim = input;
        if (!sObj) sObj = [];
        sObj.push(_newWortObj);
    } else {
        input = prompt(`⚠️ ${sTxt} kelimesi listede mevcut.`, sObj[index].tanim);
        sObj[index].tanim = input;
    };
    if (!!input) window.localStorage.setItem('@ri5: neuWorte', JSON.stringify(sObj));   
    }
    window.newSelectedText=newSelectedText
    newSelectedText()
