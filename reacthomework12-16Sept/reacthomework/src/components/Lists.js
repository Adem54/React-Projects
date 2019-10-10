import React, { Component } from 'react'
import List from './List'

 class Lists extends Component {
    render() {
    
         
        const {staticList}=this.props;
        console.log(staticList);
       
       
        return (
            <div>
                {
            
                 staticList.map((arrItem,index)=>{
                        return(
                        <List
                      key={index}
                        staticList={arrItem}
                        
                        />
                        )
                    })
                }
                
                
            </div>
        )
    }
}

export default Lists;