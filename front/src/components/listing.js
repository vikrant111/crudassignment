import React, { Component } from 'react'
import {connect} from "react-redux"
import { deleteData, getList ,listing1} from '../redux/data/dataActions';
import AddData from './AddData';
import EditData from './EditData';

 class listing extends Component {
   constructor(props){
     super(props);
     this.state={
       listData:'',
       addForm:false,
       editData:false,
       id:""
     }
   }

   componentDidMount(){
     getList().then(res=>{
       this.props.listing1(res.data.list)
       console.log('SSSSSSS',res)
     });
   }

    addDataForm=()=>{
      this.setState({addForm:true})
    }

    editDataForm=(id)=>{
      this.setState({editData:true})
      this.setState({id:id})
    }
    closeEditForm=()=>{
      this.setState({editData:false})
    }
    OnhandleCloseForm=()=>{
      this.setState({addForm:false})
    }

    delete=(id)=>{
        deleteData(id).then(res=>{
          alert('delete successfull')
          this.props.listing1(res.data.list)

        })
    }

    render() {
      console.log('SSSSSSSS1',this.props.data)
        return (
         <>
         <div><button className="button button3" onClick={()=>this.addDataForm()}>Add New</button></div>
         <br/>
         
        <table>
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Action</th>
        </tr>

        {this.props.data.length > 0 && this.props.data.map(data=>{
          return(
            <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td><button class="button button1" onClick={()=>this.editDataForm(data._id)}>Update</button>
                <button class="button button2" onClick={()=>this.delete(data._id)}>Delete</button></td>
            </tr>
          )
        })}
        
        </table>

         {this.state.addForm==true &&
            <AddData
              Modal={this.state.addForm}
              triggerParentClose={() =>this.OnhandleCloseForm()}/>}

              {this.state.editData==true && 
              <EditData Modal={this.state.editData} id={this.state.id} triggerParentClose={()=>this.closeEditForm()}/>}
        
         </>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('asas',state)
    return {
      data:state.dataReducer.listing,
    };
  };


export default connect(mapStateToProps,{listing1})(listing)
