import React, { Component } from 'react';
//require('../image/menu/elektronik.jpeg'

const MenuBox = (props : any) => {
    return (
        <div style={{height:150, width:250, backgroundColor:'#F5F1F1', marginTop:40, borderRadius:10,}}>                    
            <div style={{height:100, width:'100%',  justifyContent:'center', display:'flex', alignItems:'center'}}>
                <img src={props.url} alt ={props.title} />
            </div>
            <div style={{height:50, width:'100%', borderBottomLeftRadius:10, borderBottomRightRadius:10, backgroundColor:'#06E752', justifyContent:'center', display:'flex', alignItems:'center'}}>
                 <span style={{color:'white'}}>{props.title}</span> 
            </div>
        </div>
    );
  }
  
export default MenuBox;