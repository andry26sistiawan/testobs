import React, { Component, } from 'react';
//import {MenuNavbar} from '../../atom/index';
import { NavLink as Link, Route} from "react-router-dom";
import { Button } from 'react-bootstrap';

class Navbar extends Component{
    render(){
        return(
            <div style={{display:'flex', flex:1,}}>
                <div style={{height:'18vh', width:'100%', display:'flex', position:'fixed', flex:1, flexDirection:'column',}}>
                    <div style={{height:80, width:'100%',justifyContent:'center', display:'flex', alignItems:'center', backgroundColor:'#06E752' }}>
                        <Link to="/page1" style={{ textDecoration: 'none', color:'black' }}>
                            <Button style={{marginRight:'5vh',height:50, width:150, justifyContent:'center', alignItems:'center', display:'flex',}}>
                                <span>Page 1</span>
                            </Button>
                        </Link>
                        <Link to="/page2" style={{ textDecoration: 'none', color:'black' }}>
                            <Button style={{marginRight:'5vh',height:50, width:150, justifyContent:'center', alignItems:'center', display:'flex'}}>
                                <span>Page 2</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;


