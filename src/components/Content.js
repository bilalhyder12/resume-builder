import React from "react";
import Row from 'react-bootstrap/Row';
import Personal from '../sections/Personal.js';

class Content extends React.Component {

    handlePage = (pageValue) => {
        this.props.onChangePage(pageValue);
    }

    getComponet(){
        if(this.props.page == "Personal"){
            return (<Personal onChangePage={this.handlePage}/>)
        }
        // else if(this.props.page === "Education"){
        //     return(<Education onChangePage={this.handlePage}/>)
        // }
        // else if(this.props.page === "Work"){
        //     return(<Work onChangePage={this.handlePage}/>)
        // }
        // else if(this.props.page === "review"){
        //     return(<Review onChangePage={this.handlePage}/>)
        // } 
    }

    render(){
        return (
            <div>
                <Row className="p-2 justify-content-center">
                    <h2 className="">
                        {this.props.page}
                    </h2>
                </Row> 
                <Row className="p-2 justify-content-center">
                    {this.getComponet()}
                </Row>
            </div>
        )
    }
}

export default Content