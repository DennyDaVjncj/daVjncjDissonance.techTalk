module.exports={
    pocketWatch:sunsPosition=>{
        return sunsPosition.toLocaleDateString();
    },
    genEmoji:epiphany=>{        
        if(epiphany){
            return `<span for="img" aria-label="epiphany">💡</span>`;
        }        
    }
}//virtual assistance