import React, { Component } from 'react'
import { Modal } from "react-bootstrap";
import {addDataInList, listing1 } from '../redux/data/dataActions';
import { withRouter } from "react-router-dom";
import {connect} from "react-redux"

 class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          lastName: "",
          email:"",
          firstName:"",
        };
      }

    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    addData=(e)=>{
        e.preventDefault()
        addDataInList(this.state).then(res=>{
            alert('successfully add')
           this.props.listing1(res.data.list)
           this.props.triggerParentClose()
        }).catch((err)=>{
            console.log('er',err)
        })
    }

    render() {
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
                    <h5>Add Data </h5>
                  </div>
                  <div class="form-fields">
                    <form onSubmit={this.addData}  >
                      <div class="floating-effect form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                           onChange={this.handleChange} 
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div class="floating-effect form-group">
                        <input
                          type="name"
                          name="firstName"
                          placeholder="firstName"
                           onChange={this.handleChange} 
                        />
                        <label htmlFor="name">firstName</label>
                      </div>
                      <div class="floating-effect form-group">
                        <input
                          type="lastName"
                          name="lastName"
                          placeholder="lastName"
                           onChange={this.handleChange} 
                        />
                        <label htmlFor="lastName">lastName</label>
                      </div>
                      <p class="link-text">
                        <button className="button button3"onClick={()=>this.addData} >
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
export default connect(null,{listing1})(AddData)