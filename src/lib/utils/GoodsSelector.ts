function GoodsSelector(icon: string){
    if(icon === "Sunny"){
        return 0; //마스크, 선크림
    }
    else if(icon === "Cloudy"){
        return 1; //마스크
    }
    else{
        return 2; //마스크, 우산
    }
}

export default GoodsSelector;