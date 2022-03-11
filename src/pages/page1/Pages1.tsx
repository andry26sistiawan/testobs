import React, { Component } from 'react';
import {BoxFeed} from '../../components'
import alatTulis from '../../assets/Image/Image/alattulis.jpeg';

export interface State  {
    dataList : any,
};

export type Props = {
   
};
class Pages1 extends React.Component<Props, State>{
    constructor(props : State) {
        super(props);
        this.state = {
            dataList:[
                {
                    title: "Sembako",
                    Source : require('../../assets/Image/Sembako1.png')
                },
                {
                    title: "ElekTronik",
                    Source : require('../../assets/Image/elektronik.jpeg')
                },
                {
                    title: "Sayuran",
                    Source : require('../../assets/Image/sayuran.jpeg')
                },
                {
                    title: "Lauk Pauk",
                    Source : require('../../assets/Image/laukpauk.jpeg')
                },
                {
                    title: "Fashion",
                    Source : require('../../assets/Image/fashion.jpeg')
                },
                {
                    title: "Perabotan",
                    Source : require('../../assets/Image/rumahtangga.jpeg')
                },
                {
                    title: "Ibu & Anak",
                    Source : require('../../assets/Image/ibu.jpeg')
                },
                {
                    title: "Alat Tulis",
                    Source : require('../../assets/Image/alattulis.jpeg')
                },
                {
                    title: "Sayuran",
                    Source : require('../../assets/Image/sayuran.jpeg')
                },
            ],
        };
      }
    render(){
        return(
            <div style={{height:'82vh', width:'100vw', justifyContent:'center', paddingTop:'18vh', backgroundColor:'white', paddingBottom:'10vh'}}>
                <div style={{height:30, width:'100vw',  justifyContent:'center', alignItems:'center', display:'flex', }}>
                    <span>This Pages 1</span>
                </div>
                <div style={{ width:'100vw',  justifyContent:'center', alignItems:'center', display:'flex',paddingBottom:20}}>
                    <div style={{width:'70vw', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                        {
                            this.state.dataList.map((y : any) => {
                                return (<BoxFeed key={y.source} title={y.title} url ={y.Source} />)
                            })
                        }    
                    </div>
                    
                </div>
                
            </div>
        )
    } 
}

export default Pages1;