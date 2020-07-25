class Route{
    constructor(map){
        this.map =map
    }

    zero(start,end){
        if(start.r != end.r && start.c != end.c)return;
        let min, max;
        if(start.r == end.r){
            max = Math.max(start.c,end.c);
            min = Math.min(start.c, end.c);
            for(min++; min < max; min++){
                if(this.map[start.r][min].sta)return;
            }
        }else{
            max = Math.max(start.r,end.r);
            min = Math.min(start.r, end.r);
            for(min++; min < max; min++){
                if(this.map[min][start.c].sta)return;
            }
        }
        return true;
    }
    one(start,end){
        if(start.r == end.r || start.c == end.c)return;
        let point = {
            r:start.r,
            c:end.c
        }
        if(!this.map[point.r][point.c].sta&&
            this.zero(point,start)&&
            this.zero(point,end)){
                return point;
        }
        point = {
            r:end.r,
            c:start.c
        }
        if(!this.map[point.r][point.c].sta&&
            this.zero(point,start)&&
            this.zero(point,end)){
                return point;
        }
    }

    two(start,end){
        for(let i = start.r+1 ; i < this.map.length;i++){
            let vm = this.map[i][start.c];
            if(!vm.sta){
                let pont =this.one(vm,end);
                if(pont)return[vm,pont]
            }else break
        }
        for(let i = start.r-1 ; i >= 0;i--){
            let vm = this.map[i][start.c];  
            if(!vm.sta){
                let pont =this.one(vm,end);
                if(pont)return[vm,pont]
            }else break
        }
        for(let j = start.c+1; j < this.map[0].length; j++){
            let vm=this.map[start.r][j];
            if(!vm.sta){
                let pont =this.one(vm,end);
                if(pont)return[vm,pont]
            }else break
        }
        for(let j = start.c-1; j >= 0; j--){
            let vm=this.map[start.r][j];
            if(!vm.sta){
                let pont =this.one(vm,end);
                if(pont)return[vm,pont]
            }else break
        }
    }

    get(start,end){
        let rester = null;
        if(start.val != end.val)return;
        if(this.zero(start,end)){
           return[start,end]
        }
        if(rester= this.one(start,end)){
            return [start,rester,end]
        }
        if(rester = this.two(start,end)){
            return [start,...rester,end]
        }
    }
}
