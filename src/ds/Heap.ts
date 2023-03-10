class Heap {

    heap: number[];
   

    constructor(){
        this.heap = [];
    }

    insert( val: number): void{
       this.heap.push( val )     
    }
    delete( val: number ): number{
        return 0;
    }

    size(): number{
        return this.heap.length;
    }

    isEmpty():boolean{
        return this.heap.length === 0 ? true: false;
    }

    getList(): number[]{
        return this.heap;
    }

    getChildren( index: number ): number[]{
        if( index === 0) return [1, 2];
        return [ 2*index+1, 2*index+2];
    }

    getParent( index:number ): number | null{
        if( index === 0 ) return null;

        return Math.floor( (index-1)/2 );
    }
}

class MinHeap extends Heap{

}

class MaxHeap extends Heap {

}