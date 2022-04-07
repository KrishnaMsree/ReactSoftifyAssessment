import React, { Component, useEffect, useState } from "react";
import '../App.css';

// function SumOfArrayComp() {
//     var arr = [ { isBlue: true, value: 10 }, { isBlue: false, value: 70 }, { isBlue: true, value: 20 }, { isBlue: true, value: 20 }, { isBlue: false, value: 20 }];
//     const [sumofarray, setSumOfArray] = useState(0)
//     const sumOfArray = async (arr) => {
//       let l = arr.length;
//       var sum = 0
//       for(let i = 0; i<l;i++){
//             if(arr[i].isBlue){
//                 sum += arr[i].value
//             }
//         }   
//         setSumOfArray(sum)
//     };
//     const fetchData = async () => {
//         sumOfArray(arr);
//     };

//     useEffect(() => {
//       fetchData();
//     }, []);

//     return (
//         <div className="container  text-center center">
//         <div className="row"><br />
//             <div className="col-md-6 col-sm col-lg-6 offset-lg-3">
//                 <div className="card bg-default">
//                     <div className="card-header">
//                         <h3>Sum of Array when isBlue is true</h3>
//                     </div>
//                     <div className="card-body">
//                         <p className="card-text">
//                             <b>Sum of given array: </b>
//                             {sumofarray!== 0?sumofarray:<span></span>}
//                         </p>  
//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     )
// }

class SumOfArrayComp extends Component {
    constructor(){
        super();
        this.state = {
            arrayvalues : 
            [ 
                { isBlue: true, value: 10 }, 
                { isBlue: false, value: 70 },
                { isBlue: true, value: 20 }, 
                { isBlue: true, value: 20 },
                { isBlue: false, value: 20 }
            ],
            sumofarray : 0
        };

    }
    sumOfArray = (arr) => {
      let l = arr.length;
      var sum = 0
      for(let i = 0; i < l; i++){
            if(arr[i].isBlue){
                console.log(arr[i].value)
                sum += arr[i].value
            }
        }   
        this.setState({sumofarray : sum})
    };
    componentDidMount(){
        this.sumOfArray(this.state.arrayvalues)
    }
    render() {
        return (
            <div className="container text-center center">
            <br />
            <br />
            <div className="row"><br />
                <div className="col-md-6 col-sm col-lg-6 offset-lg-3">
                    <div className="card bg-default">
                        <div className="card-header">
                            <h3>Sum of Array when isBlue is true</h3>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <b>Sum of given Array: </b>
                                {this.state.sumofarray!== 0?this.state.sumofarray:<span></span>}
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default SumOfArrayComp;