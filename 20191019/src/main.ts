interface arrStr {
    [key: string]: any,
}
class ValueFind {
    public rearr: arrStr = []
    public path: arrStr = []
    public count: Number = 0
    public fn:Function = ()=>{}
    constructor(item: object|arrStr, query: string | number|RegExp|Function): arrStr {
        typeof query === "function"
            ?(this.fn=query)
            : typeof query === "object"
            ? (this.fn=(el,q)=>{query.test(el+"")})
            :(this.fn=(el,q)=>{(""+el).indexOf(""+q)>=0})
        this.findvalue(item, query)
        this.rearr.pop()
        return this.rearr
    }
    findvalue(object: object|arrStr, query: string | number|RegExp|Function): void {
        const obj = object
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const el = obj[key]
                if (typeof el === "object") { // 检测当前键对应的值是否为object类型,是的话记录路径并进入递归
                    this.path[0] === undefined 
                    ?Array.isArray(object)
                        ?this.path.push("["+key+"]")
                        : this.path.push(""+key)
                    : this.path.push("." + key) // 记录下当前路径
                    this.findvalue(el, query) // 递归查询
                    this.path.pop()// 查找完对象内的路径后,移除当前路径
                } else if (this.fn(el,query)) { // 将当前对象路径的value转化为字符串类型并查找是否包含查询的字符
                    Array.isArray(obj)?(this.rearr[this.count]=this.path.join("")+"["+key+"]"):(this.rearr[this.count]=this.path.join("")+(this.path.length>0?".":"")+key)
                    ++this.count
                }
            }
        }
    }
}
const demo = {
    align: "adf",
    self: 12,
    temp: {
        align: "adfsfsdlkj",
        sif: 90
    },
    asdf: "asdfasdk",
    asdfjasd: { afslas: 78 },
    dafsasd: "78asdfa"
}
console.time("start")
console.log(new ValueFind(demo, "1"))
console.timeEnd("start")
export { ValueFind }
