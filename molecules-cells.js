const RNA=(DNA)=>{
    let RNA=""
    for(let i=0;i<DNA.length;i++){
        if(DNA[i]=='G')RNA+='C';
        if(DNA[i]=='C')RNA+='G';
        if(DNA[i]=='T')RNA+='A';
        if(DNA[i]=='A')RNA+='U';
    }
    return RNA;
}

const DNA=(RNA)=>{
    let DNA=""
    for(let i=0;i<RNA.length;i++){
        if(RNA[i]=='C')RNA+='G';
        if(RNA[i]=='G')RNA+='C';
        if(RNA[i]=='A')RNA+='T';
        if(RNA[i]=='U')RNA+='A';
    }
    return DNA;
}