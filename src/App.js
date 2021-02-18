import React from 'react';
import "./App.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Alert from 'react-bootstrap/Alert'
import Content from "./components/Content";

class App extends React.Component {
    pages = ["Personal","Education","Work","Review"];

    constructor(){
        super()
        this.state = {
            page:"Personal",
            completed:false,
            Personal:{
                set:false,
                data:{}
            },
            Education:{
                set:false,
                data:{}
            },
            Work:{set:false,
                data:{}
            },
            showAlert: false,
            alertMessage: "",
        }
    }

    closeAlert = () => {
        this.setState({
            showAlert:false,
            alertMessage:""
        })
    }

    changePage = (pageName) => {
        if(pageName === "Review" && !this.state.completed){
            this.setState({
                showAlert:true,
                alertMessage:"Please complete all the sections to review you resume."
            })
            setTimeout(this.closeAlert,4000)
        }
        else {
            this.setState({page:pageName})
        }
    }

    nextSection = (returnData) => {
        var idx = this.pages.indexOf(returnData.page)
        var nextPage = this.pages[idx+1]
        console.log(nextPage)
        this.setState({
            page:nextPage,
            [returnData.page]:{
                set:true,
                data:returnData
            }
        })
    }

    buildBreadCrumbs(selected){
        
        var crumb_items = this.pages.map((val)=> {
            if(val === selected) {
                return (<Breadcrumb.Item active>{val}</Breadcrumb.Item>)
            }
            else {
                return (<Breadcrumb.Item onClick={() => this.changePage(val)}>{val}</Breadcrumb.Item>)
            }
        })
        return (
            <Breadcrumb className="mt-2">
                {crumb_items}
            </Breadcrumb>
        )
    }

    render(){
        return(
            <div>
                <Navbar bg="dark" sticky="top" variant="dark">
                    <Navbar.Brand>Resume Builder</Navbar.Brand>
                </Navbar>
                <Container>
                    {this.buildBreadCrumbs(this.state.page)}
                    <Alert show={this.state.showAlert} onClose={() => this.closeAlert(false)} variant="info" dismissible>
                        {this.state.alertMessage}
                    </Alert>
                    <div  className="mt-2 border">
                        <Content onChangePage={this.nextSection} page={this.state.page}/>
                    </div>
                </Container>
            </div>
        )
    }
}

export default App;
