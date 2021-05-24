import React, { Component } from 'react';
import axios from 'axios';

export default class inquirylist extends Component{
    constructor(props){
        super(props);
        this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onChangeInquiryType = this.onChangeInquiryType.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            
            userid: '',
            inquirytype: '',
            reason: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/user/inquiry/edit'+ this.props.match.params.id)
        .then( response =>{
            this.setState({
                userid : response.data.userid,
                inquirytype : response.data.inquirytype,
                reason : response.data.reason
            });

        })

        .catch(function(error){
            console.log(error);

        })
    }

    onChangeUserId(e){
        this.setState({
             userid: e.target.value
        });   
     }
 
     onChangeInquiryType(e){
         this.setState({
             inquirytype: e.target.value
         });   
      }
 
      onChangeReason(e){
         this.setState({
             reason: e.target.value
         });   
      }

      onSubmit(e){
          e.preventDefault();

          const obj ={
            userid : this.state.userid,
            inquirytype : this.state.inquirytype,
            reason : this.state.reason
          };
          axios.post('http://localhost:5000/user/inquiry/update' + this.props.match.params.id, obj)
          .then(res => console.log (res.data));

          this.props.history.push('/inquirylist');
      }


    render(){
        return(

            <div className="container">

            </div>
        )
    }
}
