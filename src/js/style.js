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
        height:'93vh',
        position:'absolute',
        color:'white',
        top:'7vh',
        left:0,
        overflow:'hidden',
        display:'flex'
    }
    /// used for header element
    header = {
        backgroundColor : this.colors.header,
        width:'100vw',
        minHeight:'7vh'
    }
    camera ={
        width:"50%",
        float: "left",
        padding: "20px",
        overflow:'hidden',
        image:{
            borderRadius:10,
            borderWidth: 10,
            width:'100%',
            maxHeight:'50%'
        },
        cOptions:{
            marginTop:'2.5%',
            width:'100%',
            height:'47%',
            borderRadius:10,
            borderWidth: 10,
            backgroundColor:this.colors.mText
        }
    }
    cp={
        width:"50%",
        float: "left",
        padding: "20px",
        droneConsole:{
            backgroundColor:'black',
            color:'white',
            height:'50%'
        }
    }
    
    constructor(colors){

    }
}
export default y