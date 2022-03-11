import * as React from "react";
import { Alert, Button, Form, Modal  } from 'react-bootstrap';



export interface State  {
    fieldText : string;
    fieldNumeric : number;
    fieldDate : Date;
};

export type Props = {
   
};
  

class Pages2 extends React.Component<Props, State>{
      constructor(props : State) {
        super(props);
        this.state = {
            fieldText:'',
            fieldNumeric:0,
            fieldDate: new Date,
        };
        this.submit = this.submit.bind(this);
      }

    submit(){
        //let a = this.State.fieldText;
        this.setState({
            fieldText :'Tesss',
        });
        alert("Isi Text Field = " + this.state.fieldText + ", Isi Field Numeric = " + this.state.fieldNumeric + ", Isi Field Date = " + this.state.fieldDate);
    }
    render(){
        return(
            <div style={{height:'82vh', width:'100vw', justifyContent:'center', paddingTop:'18vh', backgroundColor:'white'}}>
                <div style={{height:30, width:'100vw',  justifyContent:'center', alignItems:'center', display:'flex'}}>
                    <span>This Pages 2</span>
                </div>
                <div style={{width:'100vw', alignItems:'center', justifyContent:'center', display:'flex', marginTop:'5vh',  }}>
                    <div style={{width:'40vw', borderStyle:'solid', borderWidth:2, borderColor:'#cecece', paddingBottom:20 }}>
                        <div style={{marginTop:10, height:30, display: 'flex', alignItems:'center', paddingLeft:4, paddingRight:4}} >
                            <div id="lblUsername" style={{flex: 1}}>
                                <span>Text Field</span>
                            </div>
                            <div id="lblUsername" style={{flex: 2, height: '100%'}}>
                                <input onChange={(e : any) => this.setState({fieldText : e.target.value})} type="text" style={{width:'80%', height:10, borderWidth:2, padding:12, border:'solid', borderColor:'#E5E5E5', borderRadius:10 }}/>
                            </div>
                        </div>
                        <div style={{marginTop:10, height:30, display: 'flex', alignItems:'center', paddingLeft:4, paddingRight:4}} >
                            <div id="lblUsername" style={{flex: 1}}>
                                <span>Numeric Field</span>
                            </div>
                            <div id="lblUsername" style={{flex: 2, height: '100%'}}>
                                <input onChange={(e : any) => this.setState({fieldNumeric : e.target.value})} type="number" style={{width:'80%', height:10, borderWidth:2, padding:12, border:'solid', borderColor:'#E5E5E5', borderRadius:10 }}/>
                            </div>
                        </div>
                        <div style={{marginTop:10, height:30, display: 'flex', alignItems:'center', paddingLeft:4, paddingRight:4}} >
                            <div id="lblUsername" style={{flex: 1}}>
                                <span>Date Field</span>
                            </div>
                            <div id="lblUsername" style={{flex: 2, height: '100%'}}>
                                <input onChange={(e : any) => this.setState({fieldDate : e.target.value})} type="date" style={{width:'80%', height:10, borderWidth:2, padding:12, border:'solid', borderColor:'#E5E5E5', borderRadius:10 }}/>
                            </div>
                        </div>
                        <div style={{marginTop:30, height:30, display: 'flex', alignItems:'center', paddingLeft:4, paddingRight:4, justifyContent:'center', }} >
                            <Button onClick={this.submit}>
                                <span>Submit</span>   
                            </Button>                           
                        </div>

                    </div>
                </div>
                
            </div>
        )
    } 
}

export default Pages2;