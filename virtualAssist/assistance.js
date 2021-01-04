module.exports={
    digitialDisplay:sunsPosition=>{
        return sunsPosition.toLocaleDateString();
    },
    brainActivity:epiphany=>{        
        if(epiphany){
            return `<span for="img" aria-label="epiphany">💾</span>`;
        }      
    },
    cookTheBooks:revenue=>{
        return parseInt(revenue).toLocaleString();
    }
}//virtual assistance