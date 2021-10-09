

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            value: '',
            handles:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //  apiHandler(){
        
    //         fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=tomvsaji2', {
    //             "method": "GET",
    //             "mode"  :  "no-cors",
    //             "headers": {
    //                 "Authentication": "Bearer"
    //             }
    //         })
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    //     }
       

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
        
    }

    handleSubmit(e) {
    e.preventDefault();
    this.setState({
        handles: this.state.value.toLowerCase().split(/[ ,]+/).slice(0,4)
    })
    }
    

    render() {

        return (
            <div>

                <div className="jumbotron text-center" >
                    <div className="input-field p-5 m-5 rounded ">
                        <h1>Fetch Tweets</h1>
                        <p>Only the first four handles are used</p>
                        <form
                            className="form-inline">

                            <div className="input-group">
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    size="50"
                                    placeholder="Twitter Handles"
                                    required />
                                <div className="input-group-btn">
                                    <button
                                        onClick={this.handleSubmit}
                                        className="btn btn-primary">
                                        <i className="fab fa-twitter"></i>
                                        Get Tweets
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
                
              <div className="feedContainer">
                 
              { this.state.handles.map( (x,index) => {
                  return(
             <ul> <DisplayBox key={index} data={x} /> </ul>
              
                  );
               })}
              </div>
              <div className="d-flex p-5"> 

              <a className="twitter-timeline" href="https://twitter.com/tomvsaji2">
                  Tweets by TwitterDev</a> 

              </div>
              
            </div>
        );
    }
}

function DisplayBox(props) {
    
    return (
        

        <div>
         <li><a className="twitter-timeline tw-align-center " href={"https://twitter.com/{props.data}"}>Twitter Profile {props.data}</a></li>
        </div>
        

    )
}


ReactDOM.render(<App />, document.getElementById("root"));
