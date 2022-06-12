function newSelectedText(){
    let sTxt, msg, index, input, sObj, _newObj = {};
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
        input = prompt(`✅ "${sTxt}" kelimesi listeye eklenecek.`,'Kelimeyi tanimla...');
        _newObj.tanim = input;_newObj.date=new Date();
        if (!sObj) sObj = [];
        sObj.push(_newObj);
    } else {
        input = prompt(`⚠️ ${sTxt} kelimesi listede mevcut.`, sObj[index].tanim);
        sObj[index].tanim = input;sObj[index].date=new Date();
    };
    if (!!input) {
        sObj[index].date= new Date();
        window.localStorage.setItem('@ri5: neuWorte', JSON.stringify(sObj));};   
    }
    window.newSelectedText=newSelectedText
    newSelectedText()
