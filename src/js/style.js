let y = class style{
    colors ={
        mBG :'#323232',
        mText : '#F1FFE7',
        altText : '#A9FDAC',
        header : "#32A287"
    }
    /// Main container for index.js
    main = {
        backgroundColor:this.colors.mBG,
        width:'100vw',
        height:'100vh',
        position:'absolute',
        color:'white',
        top:0,
        left:0,
        overflow:'hidden'
    }
    /// used for header element
    header = {
        backgroundColor : this.colors.header,
        width:'100vw',
        minHeight:'10vh'
    }
    camera ={
        width:'50vw',
        overflow:'hidden'
    }
    constructor(colors){

    }
}
export default y