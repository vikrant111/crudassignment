import React, { Component } from 'react'
import { Modal } from "react-bootstrap";
import axios from "axios";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";
import { updateList ,listing1 } from '../redux/data/dataActions';

 class EditData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id:this.props.id,
          lastName: "",
          email:"",
          firstName:"",
        };
      }
    
    componentDidMount(){
        axios({
            method:'GET',
            url:`http://localhost:8000/listData/${this.props.id}`,
        }).then(res=>{
            console.log(res)
            this.setState({firstName:res.data.data.firstName,lastName:res.data.data.lastName,email:res.data.data.email})
        })
    }

    updateData=(e)=>{
        e.preventDefault()
        updateList(this.state).then(res=>{
            alert('Edit Successfull')
            this.props.listing1(res.data.list)
            this.props.triggerParentClose()
        })
    }

    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
    console.log('sss',this.state)
        return (
            <div>
                  <Modal
          show={this.props.Modal}
          onHide={this.props.triggerParentClose}
          style={{ paddingTop: "100px" }}
        >
          <Modal.Header closeButton>
            <div class="modal-body">
              <div class="popup-content-block">
                <div class="login-block">
                  <div class="modal-heading-block">
                    <h5>Edit Data </h5>
                  </div>
                  <div class="form-fields">
                    <form onSubmit={this.updateData}  >
                      <div class="floating-effect form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.handleChange} 
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div class="floating-effect form-group">
                        <input
                          type="name"
                          name="firstName"
                          placeholder="firstName"
                          value={this.state.firstName}
                         onChange={this.handleChange} 
                        />
                        <label htmlFor="name">firstName</label>
                      </div>
                      <div class="floating-effect form-group">
                        <input
                          type="lastName"
                          name="lastName"
                          placeholder="lastName"
                          value={this.state.lastName}
                           onChange={this.handleChange} 
                        />
                        <label htmlFor="lastName">lastName</label>
                      </div>
                      <p class="link-text">
                        <button className="button button3" onClick={()=>this.updateData} >
                          Submit
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Header>
        </Modal>
            </div>
        )
    }
}

export default connect(null,{listing1})(EditData)